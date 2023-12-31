import { Component, Input, OnChanges } from '@angular/core';
import { recipes } from '../../data/recipes';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.css'],
})
export class IngredientComponent implements OnChanges{
  @Input()
  name!: string;

  @Input()
  quantity!: number;

  label : string = '';

  ngOnChanges () {
    this.label = recipes.find(r => r.name === this.name)?.label ?? this.name;
  }

}


