// For simplicity it is just reversed bubble sort, but it looks the same.
export function gravitysort(toAnimate: {i: number, j: number}[], records: number[]){
    let swaps: number;
    do{
        swaps = 0;
        for(let i = records.length-1; i > 0; i--){
            if(records[i] < records[i-1]){
                toAnimate.push({i: i, j: i-1});
                [records[i], records[i-1]] = [records[i-1], records[i]];
                swaps++;
            }
        }
    }while(swaps > 0)
}