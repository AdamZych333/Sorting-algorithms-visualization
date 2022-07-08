export class Record{

    constructor(private value: number){
        this.value = value;
    }

    getValue(){
        return this.value;
    }

    setValue(value: number){
        this.value = value;
    }
}