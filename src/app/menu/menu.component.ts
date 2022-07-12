import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { RecordsService } from '../records.service';
import { algorithms } from '../utils/constants/algorithms';
import { Algorithm } from '../utils/select-option';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass']
})
export class MenuComponent {
  MAX_SIZE: number = 1000;
  MIN_SIZE: number = 10;
  DEFAULT_SIZE: number = 100;
  algorithms: Algorithm[] = algorithms;
  selectedAlgorithm: Algorithm = this.algorithms[0];
  running: boolean = false;
  selectedSize = new FormControl(this.DEFAULT_SIZE, [Validators.min(this.MIN_SIZE), Validators.max(this.MAX_SIZE)]);

  constructor(private recordsService: RecordsService) {
    recordsService.createRecords(this.DEFAULT_SIZE)
  }

   onStartClick(){
    if(this.selectedSize.invalid) return;
    this.running = true;
    this.selectedSize.disable()
    this.selectedAlgorithm.execute(this.recordsService.getRecords()).then(() => {
      this.running = false;
      this.selectedSize.enable()
    });
   }

   onSizeChange(){
    if(this.selectedSize.invalid || this.selectedSize.value == null) return;
    this.recordsService.createRecords(this.selectedSize.value);
   }

   onShuffleClick(){
    this.recordsService.shuffle()
   }
}
