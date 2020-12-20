//here, we want to implement the HasFormatter interface
import {HasFormatter} from '../interfaces/HasFormatter.js'


export class Invoice implements HasFormatter {
    constructor(
        readonly client:string,
        private details: string,
        public amount: number
    ){}

    format(){
        return `${this.client} owes $${this.amount} for ${this.details}`
    }
}

//whenever a new object is made from this class,
//the constructor will run and take in 3 values passed into it,
//then assign these values to the 3 properties