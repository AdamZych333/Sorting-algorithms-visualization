import { quicksort } from "../algorithms/quicksort";
import { Record } from "../record";
import { Algorithm } from "../select-option";

export const algorithms: Algorithm[] = [
    new Algorithm('quicksort', 'Quick sort', (records: Record[]) => quicksort(records, 0, records.length-1)),
    new Algorithm('selectsort', 'Select sort', () => {})
];