import { Injectable } from '@angular/core';
import { quicksort } from './utils/algorithms/quicksort';
import { Record } from './utils/record';

@Injectable({
  providedIn: 'root'
})
export class RecordsService {
  size: number = 0;
  records: Record[] = []

  constructor() { }

  createRecords(size: number = this.size){
    if(size > this.size){
      let value = this.records.length;
      while(this.records.length < size){
        this.records.push(new Record(value++));
      }
    }
    else if(size < this.size){
      while(this.records.length > size){
        this.records.pop();
      }
      for(let i = 0; i < this.records.length; i++){
        this.records[i].setValue(i+1);
      }
    }
    this.size = size;
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

      this.swap(currentIndex, randomIndex);
    }
  }

  swap(recordAIndex: number, recordBIndex: number){
    [this.records[recordAIndex], this.records[recordBIndex]] = [this.records[recordBIndex], this.records[recordAIndex]]
  }
}
