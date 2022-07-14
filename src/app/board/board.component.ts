import { Component } from '@angular/core';
import { RecordsService } from '../records.service';
import { Record } from '../utils/record';
import { recordColor } from '../utils/record-color';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.sass']
})
export class BoardComponent {
  records: Record[] = [];

  constructor(private recordsService: RecordsService) {
    this.records = recordsService.getRecords()
   }

  getColor(record: Record){
    return this.recordsService.rainbowColor? 
      recordColor(this.getMax(), record.getValue(), record.isHighlighted()): 
      'hsla(280, 80%, 60%, 1)';
  }

  getMax(): number{
    return this.records.reduce((prev, curr) => {
      return prev.getValue() > curr.getValue()? prev: curr;
    }).getValue();
  }

  getMin(): number{
    return this.records.reduce((prev, curr) => {
      return prev.getValue() < curr.getValue()? prev: curr;
    }).getValue();
  }
}
