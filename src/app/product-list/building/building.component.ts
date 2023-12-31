import { Component, Input, OnChanges } from '@angular/core';
import { Building, buildings } from 'src/app/data/builder';

@Component({
  selector: 'app-building',
  templateUrl: './building.component.html',
  styleUrls: ['./building.component.css'],
})
export class BuildingComponent implements OnChanges{
  
  @Input()
  name!: string;

  label : string = '';

  ngOnChanges () {
    this.label = buildings.find(r => r.name === this.name)?.label ?? this.name;
  }

}


