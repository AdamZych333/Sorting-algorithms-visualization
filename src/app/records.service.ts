import { Injectable } from '@angular/core';
import { Record } from './utils/record';

@Injectable({
  providedIn: 'root'
})
export class RecordsService {
  size: number = 20;
  records: Record[] = []

  constructor() { 
    this.createRecords();
  }

  createRecords(size: number = this.size){
    this.size = size;
    this.records = [];
    for(let i = 1; i <= this.size; i++){
      this.records.push(new Record(i));
    }
    this.shuffle();
  }

  getRecords(){
    return this.records;
  }

  shuffle(){
    let currentIndex = this.records.length, randomIndex;

    while(currentIndex != 0){
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      this.swap(this.records[currentIndex], this.records[randomIndex]);
    }
  }

  swap(recordA: Record, recordB: Record){
    const tmp = recordA.getValue()
    recordA.setValue(recordB.getValue());
    recordB.setValue(tmp);
  }
}
