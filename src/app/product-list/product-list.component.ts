import { Component } from '@angular/core';

import { recipes, Recipe, Ingredients } from '../data/recipes';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  recipes: Recipe[] = [...recipes];

  netProducts: Ingredients = {
    ironPlate: 10,
    ironRod: 5,
    screw: 10,
    reinforcedIronPlate: 5,
    rotor: 5,
    superComputer: 1,
  };

  products = this.fillWithNeededProducts({ ...this.netProducts });

  share() {
    window.alert('The product has been shared!');
  }

  getIngredients(productName: string, nb: number): Ingredients {
    const recipe = this.recipes.find((prd) => prd.name === productName);
    const ingredients: Ingredients = {};
    if (recipe) {
      for (let ingredient in recipe.ingredients) {
        const quantity = this.getIngredientQuantity(
          nb,
          recipe.outProductNb,
          recipe.ingredients[ingredient]
        );

        this.addIngredient(ingredients, ingredient, quantity);
        this.mergeIngredients(
          ingredients,
          this.getIngredients(ingredient, quantity)
        );
      }
    }
    return ingredients;
  }

  getIngredientQuantity(
    askQuantity: number,
    recipeQuantity: number,
    recipeIngredientQuantity: number
  ): number {
    return (recipeIngredientQuantity * askQuantity) / recipeQuantity;
  }

  addIngredient(existingIngredients: Ingredients, name: string, nb: number) {
    existingIngredients[name] = (existingIngredients[name] ?? 0) + nb;
  }

  mergeIngredients(
    existingIngredients: Ingredients,
    newIngredients: Ingredients
  ) {
    for (let key in newIngredients) {
      this.addIngredient(existingIngredients, key, newIngredients[key]);
    }
  }

  fillWithNeededProducts(products: Ingredients): Ingredients {
    const allIngredients = { ...products };
    for (let outkey in products) {
      const newIngredients = this.getIngredients(outkey, products[outkey]);
      this.mergeIngredients(allIngredients, newIngredients);
    }
    return allIngredients;
  }

  getBuilder(productName: string, nb: number): { name: string; nb: number } {
    const recipe = this.recipes.find((prd) => prd.name === productName);
    if (recipe) {
      return { name: recipe.building, nb: nb / recipe.outProductNb };
    }
    return { name: '', nb: 0 };
  }
}


