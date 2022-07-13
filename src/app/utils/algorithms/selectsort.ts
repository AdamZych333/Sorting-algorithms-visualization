export function selectsort(toAnimate: {i: number, j: number}[], records: number[]){
    for(let i = 0; i < records.length; i++){
        let minIndex = i;
        let min = records[minIndex];
        for(let j = i + 1; j < records.length; j++){
            if(records[j] < min) {
                min = records[j];
                minIndex = j;
            }
        }
        
        toAnimate.push({i: i, j: minIndex});
        [records[minIndex], records[i]] = [records[i], records[minIndex]]
    }
}