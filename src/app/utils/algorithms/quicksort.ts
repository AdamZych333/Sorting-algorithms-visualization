export function quicksort(toAnimate: {i: number, j: number}[], records: number[], start: number, end: number){
    function partition(records: number[], start: number, end: number){
        const x = records[end];
        let i = (start - 1);
    
        for(let j = start; j <= end - 1; j++){
            if(records[j] <= x){
                i++;
                toAnimate.push({i: i, j: j});
                [records[i], records[j]] = [records[j], records[i]];
            }
        }
        toAnimate.push({i: i+1, j: end});
        [records[i + 1], records[end]] = [records[end], records[i + 1]];
    
        return i + 1
    }
    
    if(start < end){
        const p = partition(records, start, end);
        quicksort(toAnimate, records, start, p - 1)
        quicksort(toAnimate, records, p + 1, end);
    }
}