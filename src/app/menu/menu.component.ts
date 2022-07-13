import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { RecordsService } from '../records.service';
import { RepaintService } from '../repaint.service';
import { algorithms } from '../utils/constants/algorithms';
import { Algorithm } from '../utils/select-option';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass']
})
export class MenuComponent{
  MAX_SIZE: number = 1000;
  MIN_SIZE: number = 10;
  DEFAULT_SIZE: number = 100;
  algorithms: Algorithm[] = algorithms;
  selectedAlgorithm: Algorithm = this.algorithms[0];
  selectedSize: number = 100;

  constructor(public repaintService: RepaintService, private recordsService: RecordsService) {
    recordsService.createRecords(this.DEFAULT_SIZE)
  }

   onStartClick(){
    const toAnimate: {i: number, j: number}[] = this.repaintService.queue;
    console.log(toAnimate)
    if(toAnimate.length == 0) this.selectedAlgorithm.execute(this.recordsService.getRecords(), toAnimate);
    this.repaintService.start();
   }

   onSizeChange(event: any){
    if(event > this.MAX_SIZE || event < this.MIN_SIZE) return;
    this.recordsService.createRecords(event);
   }

   onStopClick(){
    this.repaintService.stop();
   }

   onShuffleClick(){
    this.recordsService.shuffle()
   }

   onResetClick(){
    this.repaintService.reset();
   }
}
