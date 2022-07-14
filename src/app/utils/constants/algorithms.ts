import { quicksort } from "../algorithms/quicksort";
import { selectsort } from "../algorithms/selectsort";
import { doubleSelectsort } from "../algorithms/double-selecsort";
import { Record } from "../record";
import { Algorithm } from "../select-option";
import { bubblesort } from "../algorithms/bubblesort";

export const algorithms: Algorithm[] = [
    new Algorithm('quicksort', 'Quick sort', (records: Record[], toAnimate: {i: number, j: number}[]) => 
        quicksort(toAnimate, records.map(r => r.getValue()), 0, records.length-1)),
    new Algorithm('selectsort', 'Select sort', (records: Record[], toAnimate: {i: number, j: number}[]) => 
        selectsort(toAnimate, records.map(r => r.getValue()))),
    new Algorithm('double-selectsort', 'Double select sort', (records: Record[], toAnimate: {i: number, j: number}[]) => 
        doubleSelectsort(toAnimate, records.map(r => r.getValue()))),
    new Algorithm('bubblesort', 'Bubble sort', (records: Record[], toAnimate: {i: number, j: number}[]) => 
        bubblesort(toAnimate, records.map(r => r.getValue()))),
];