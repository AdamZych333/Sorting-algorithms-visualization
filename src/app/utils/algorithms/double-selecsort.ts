export function doubleSelectsort(toAnimate: {i: number, j: number}[], records: number[]){
    const lastIndex = records.length - 1;
    for(let i = 0; i < Math.floor(records.length/2); i++){
        let minIndex = i;
        let min = records[minIndex];
        for(let j = i + 1; j <= lastIndex-i; j++){
            if(records[j] < min) {
                min = records[j];
                minIndex = j;
            }
        }
        toAnimate.push({i: i, j: minIndex});
        [records[minIndex], records[i]] = [records[i], records[minIndex]];
        
        let maxIndex = lastIndex-i;
        let max = records[maxIndex];
        for(let j = lastIndex-i-1; j > i; j--){
            if(records[j] > max) {
                max = records[j];
                maxIndex = j;
            }
        }
        toAnimate.push({i: lastIndex-i, j: maxIndex});
        [records[maxIndex], records[lastIndex-i]] = [records[lastIndex-i], records[maxIndex]];
    }
}