export class IncDec {

    counter: number;

    constructor() {
        this.counter = 1;
    }

    increment():void {
        this.counter++;
    }

    decrement():void {
        this.counter--;
    }

    print(str:string):void {
        console.log(str + " " +this.counter);
    }
}

