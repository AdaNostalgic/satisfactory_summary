import { Component } from '@angular/core';

import { recipes } from '../data/recipes';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  recipes = [...recipes];

  products = this.getNeededProducts('reinforcedIronPlate', 20);

  share() {
    window.alert('The product has been shared!');
  }

  getNeededProducts(
    productName: string,
    nb: number
  ): { [name: string]: number } {
    const recipe = this.recipes.find((prd) => prd.name === productName);
    const neededProducts: { [name: string]: number } = {};
    if (recipe && recipe.inProducts) {
      recipe.inProducts.forEach((prd) => {
        const neededNb = (prd.nb * nb) / recipe.outProductNb;
        neededProducts[prd.name] = neededNb;
        const recursiveNeeds = this.getNeededProducts(prd.name, neededNb);
        for (let key in recursiveNeeds) {
          let value = recursiveNeeds[key];
          neededProducts[key] = neededProducts[key] ?? 0 + value;
          // Use `key` and `value`
        }
      });
    }

    return neededProducts;
  }

  fillWithNeededProducts(products: { [name: string]: number }) {
    for (let outkey in products) {
      const inProducts = this.getNeededProducts(outkey, products[outkey]);
      for (let inKey in inProducts) {
        products[inKey] = products[inKey] ?? 0 + inProducts[inKey];
      }
    }
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
