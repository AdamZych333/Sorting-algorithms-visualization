export function selectsort(toAnimate: {i: number, j: number}[], records: number[]){
    for(let i = 0; i < records.length; i++){
        let min = records[i];
        for(let j = i + 1; j < records.length; j++){
            if(records[j] < min) min = records[j];
        }
        const minIndex = records.indexOf(min);
        toAnimate.push({i: i, j: minIndex});
        [records[minIndex], records[i]] = [records[i], records[minIndex]]
    }
}