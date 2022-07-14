export function bubblesort(toAnimate: {i: number, j: number}[], records: number[]){
    let swaps: number;
    let j = 0;
    do{
        swaps = 0;
        for(let i = 0; i < records.length-j-1; i++){
            if(records[i] > records[i+1]){
                toAnimate.push({i: i, j: i+1});
                [records[i], records[i+1]] = [records[i+1], records[i]];
                swaps++;
            }
        }
        j++;
    }while(swaps > 0)
}