import { Component } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.sass']
})
export class BoardComponent {
  values: number[] = [4, 5, 2, 8, 6, 15, 7, 13, 2, 12, 6, 9, 3, 11];
  min: number = 2;
  max: number = 15;

  constructor() { }

}
