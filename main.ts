import { ITransaction, Details, Transaction, OnlineTranasaction} from "./bank.js"


let tra1 = new Transaction(102, 5000, "savings", ["26", "bank"]);
let tra2 = new Transaction(105, 3000, "personal", ["31", "cash"] );
let tra3 = new OnlineTranasaction(111, 7000, "student", ["11", "fees"], "app");
let tra4 = new OnlineTranasaction(201, 10000, "loan", ["20", "emi"], "website");

let transactions: Transaction[] = [tra1, tra2, tra3, tra4];

function calculateTotal(transaction: Transaction[]):number{
    let total=0;
    for(let i=0; i<transactions.length; i++){
        total+=transactions[i].amount;
    }
return total
}

transactions.forEach(t => console.log(t.getDetails()));

console.log("Total Amount is" + calculateTotal(transactions));