import { Record } from "./record";

export class Algorithm{
    constructor(public value: string, public viewValue: string, public execute: (records: Record[]) => Promise<void>){}
}