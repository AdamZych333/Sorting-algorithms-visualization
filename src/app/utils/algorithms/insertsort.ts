export function insertsort(toAnimate: {i: number, j: number}[], records: number[]){
    for(let i = 1; i < records.length; i++){
        for(let j = i-1; j >= 0; j--){
            if(records[j] < records[j+1]) break;
            toAnimate.push({i: j, j: j+1});
            [records[j], records[j+1]] = [records[j+1], records[j]];
        }
    }
}
