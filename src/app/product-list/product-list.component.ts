import { Component } from '@angular/core';

import { recipes, Recipe, Ingredients } from '../data/recipes';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  recipes: Recipe[] = [...recipes];

  netProducts: Ingredients = { ironPlate: 20, reinforcedIronPlate: 2 };

  products = this.fillWithNeededProducts({ ...this.netProducts });

  share() {
    window.alert('The product has been shared!');
  }

  getNeededProducts(productName: string, nb: number): Ingredients {
    const recipe = this.recipes.find((prd) => prd.name === productName);
    const neededProducts: { [name: string]: number } = {};
    if (recipe) {
      for (let ingredient in recipe.ingredients) {
        const quantity: number = recipe.ingredients[ingredient];
        neededProducts[ingredient] = (quantity * nb) / recipe.outProductNb;
        this.fillWithNeededProducts(neededProducts);
      }
    }

    return neededProducts;
  }

  fillWithNeededProducts(products: Ingredients): Ingredients {
    for (let outkey in products) {
      const inProducts = this.getNeededProducts(outkey, products[outkey]);
      for (let inKey in inProducts) {
        products[inKey] = (products[inKey] ?? 0) + inProducts[inKey];
      }
    }
    return products;
  }

  getBuilder(productName: string, nb: number): { name: string; nb: number } {
    const recipe = this.recipes.find((prd) => prd.name === productName);
    if (recipe) {
      return { name: recipe.building, nb: nb / recipe.outProductNb };
    }
    return { name: '', nb: 0 };
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
