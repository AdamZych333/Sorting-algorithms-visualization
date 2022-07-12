import { Record } from "../record";

async function partition(records: Record[], start: number, end: number){
    const x = records[end];
    let i = (start - 1);

    for(let j = start; j <= end - 1; j++){
        if(records[j].getValue() <= x.getValue()){
            i++;
            await records[i].switchHighlight();
            await records[j].switchHighlight();
            [records[i], records[j]] = [records[j], records[i]];
            await records[i].switchHighlight();
            await records[j].switchHighlight();
        }
    }
    await records[i+1].switchHighlight();
    await records[end].switchHighlight();
    [records[i + 1], records[end]] = [records[end], records[i + 1]];
    await records[i+1].switchHighlight();
    await records[end].switchHighlight();

    return i + 1
}

export async function quicksort(records: Record[], start: number, end: number){
    if(start < end){
        const p = await partition(records, start, end);
        await quicksort(records, start, p - 1)
        await quicksort(records, p + 1, end);
    }
}