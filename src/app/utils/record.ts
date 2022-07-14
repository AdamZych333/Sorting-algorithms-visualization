export class Record{
    private highlighted: boolean = false;

    constructor(private value: number){
        this.value = value;
    }

    getValue(){
        return this.value;
    }

    setValue(value: number){
        this.value = value;
    }

    isHighlighted(){
        return this.highlighted;
    }

    switchHighlight(){
        return new Promise((resolve) => {
            setTimeout(() => {
                this.highlighted = !this.highlighted;
                resolve('');
            }, 10);
        })
    }

    setHighlighted(highlighted: boolean){
        this.highlighted = highlighted;
    }
}