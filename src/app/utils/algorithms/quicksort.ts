import { Record } from "../record";

function partition(records: Record[], start: number, end: number){
    const x = records[end];
    let i = (start - 1);

    for(let j = start; j <= end - 1; j++){
        if(records[j].getValue() <= x.getValue()){
            i++;
            [records[i], records[j]] = [records[j], records[i]];
        }
    }
    [records[i + 1], records[end]] = [records[end], records[i + 1]];
    return i + 1;
}

export function quicksort(records: Record[], start: number, end: number){
    if(start < end){
        const p = partition(records, start, end);
        quicksort(records, start, p - 1);
        quicksort(records, p + 1, end);
    }
}