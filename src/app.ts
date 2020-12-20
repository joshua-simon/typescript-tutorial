import {Invoice} from './classes/invoice.js'
import {Payment} from './classes/Payment.js'
import {HasFormatter} from './interfaces/HasFormatter.js'


//this code says the variable docOne must implement the 'HasFormatter' interface
// let docOne:HasFormatter
// let docTwo:HasFormatter

//these variables both work with linting errors, because they both implment the HasFormatter interface
// docOne = new Invoice('yoshi', 'web work', 250)
// docTwo = new Payment('mario', 'plumbing work', 200)

//only object which implement HasFormatter interface can be added to 'docs' array
// let docs: HasFormatter[] =[]
// docs.push(docOne)
// docs.push(docTwo)

// console.log(docs)

const form = document.querySelector(".new-item-form") as HTMLFormElement

//inputs
const type = document.querySelector('#type') as HTMLSelectElement
const tofrom = document.querySelector('#tofrom') as HTMLInputElement
const details = document.querySelector('#details') as HTMLInputElement
const amount = document.querySelector('#amount') as HTMLInputElement

//add event listener to the form

form.addEventListener('submit', (e:Event) => {
    e.preventDefault()
let doc: HasFormatter
if(type.value === 'invoice'){
    doc = new Invoice(tofrom.value,details.value, amount.valueAsNumber)
}else {
    doc = new Payment(tofrom.value,details.value, amount.valueAsNumber)
}
    console.log(doc)
})



// interface IsPerson {
//     name: string,
//     age: number,
//     speak(a: string): void
//     spend(a:number): number
// }

// //example of applying interface:

// const me: IsPerson = {
//     name: 'Josh',
//     age: 35,
//     speak(text: string): void{
//         console.log(text)
//     },
//     spend(amount:number):number {
//         console.log(`I spent ${amount}`)
//         return amount
//     }
// }

//How do we instantiate class and make an object based on it
// const invOne = new Invoice('mario', 'work on mario website', 250)
// const invTwo = new Invoice('luigi', 'work on luigi website', 300)



// //create array which only allows invoice objects
// //do this so that you can cycle through an array of invoices and know for sure it's all invoice objects
// let invoices: Invoice[] = []
// invoices.push(invOne)
// invoices.push(invTwo)

// invoices.forEach(inv => {
//     console.log(inv.client, inv.amount, inv.format())
// })
