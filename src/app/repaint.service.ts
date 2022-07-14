import { Injectable } from '@angular/core';
import { RecordsService } from './records.service';

@Injectable({
  providedIn: 'root'
})
export class RepaintService {
  queue: {i: number, j: number}[] = [];
  timer: ReturnType<typeof setTimeout> | null = null;
  running: boolean = false;
  delay: number = 0;

  constructor(private recordsService: RecordsService) { }

  start(){
    this.running = true;
    this.setTimer();
  }

  stop(){
    if(this.timer === null) return;
    this.running = false;
    clearTimeout(this.timer);
  }

  reset(){
    this.queue = [];
    this.running = false;
    if(this.timer !== null) clearTimeout(this.timer);
  }

  async repaintFromQueue(){
    const swap = this.queue.shift();
    if(swap === undefined) return;
    this.recordsService.records.forEach(r => r.setHighlighted(false));
    this.recordsService.records[swap.i].setHighlighted(true);
    this.recordsService.records[swap.j].setHighlighted(true);
    this.recordsService.swap(swap.i, swap.j);
  }

  private setTimer(){
    this.timer = setTimeout(() => {
      if(this.queue.length > 0) {
        this.repaintFromQueue().then(() => {
          this.setTimer();
        });
      }
      else {
        this.running = false;
        this.recordsService.records.forEach(r => r.setHighlighted(false));
      }
    }, this.delay);
  }

  private async wait(ms: number){
    return new Promise((resolve) => {
      setTimeout(() => {
      }, ms)
      resolve('');
    });
  }
}
