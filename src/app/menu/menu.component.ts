import { Component } from '@angular/core';
import { Algorithm } from '../utils/select-option';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass']
})
export class MenuComponent {
  algorithms: Algorithm[] = [
    new Algorithm('quicksort', 'Quick sort', () => {}),
    new Algorithm('selectsort', 'Select sort', () => {})
  ];
  selectedAlgorithm: Algorithm;

  constructor() {
    this.selectedAlgorithm = this.algorithms[0];
   }

}
