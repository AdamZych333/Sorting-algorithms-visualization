import { quicksort } from "../algorithms/quicksort";
import { Record } from "../record";
import { Algorithm } from "../select-option";

export const algorithms: Algorithm[] = [
    new Algorithm('quicksort', 'Quick sort', (records: Record[], toAnimate: {i: number, j: number}[]) => quicksort(toAnimate, records.map(r => r.getValue()), 0, records.length-1)),
    new Algorithm('selectsort', 'Select sort', () => {return new Promise(() => {})})
];