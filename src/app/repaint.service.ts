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
    this.recordsService.records[swap.i].switchHighlight();
    this.recordsService.records[swap.j].switchHighlight();
    this.recordsService.swap(swap.i, swap.j);
    this.recordsService.records[swap.i].switchHighlight();
    this.recordsService.records[swap.j].switchHighlight();
  }

  private setTimer(){
    this.timer = setTimeout(() => {
      if(this.queue.length > 0) {
        this.repaintFromQueue().then(() => {
          this.setTimer();
        });
      }
      else this.running = false;
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
