export class Invoice {
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes $${this.amount} for ${this.details}`;
    }
}
//whenever a new object is made from this class,
//the constructor will run and take in 3 values passed into it,
//then assign these values to the 3 properties
