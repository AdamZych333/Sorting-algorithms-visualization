import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
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
  MAX_SIZE: number = 1000;
  MIN_SIZE: number = 10;
  DEAFAULT_SIZE: number = 100;
  selectedSize = new FormControl(this.DEAFAULT_SIZE, [Validators.min(this.MIN_SIZE), Validators.max(this.MAX_SIZE)]);

  constructor() {
    this.selectedAlgorithm = this.algorithms[0];
   }

   onStartClick(){
    console.log("Start")
   }
}
