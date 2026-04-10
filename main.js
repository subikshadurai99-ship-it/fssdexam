"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bank_js_1 = require("./bank.js");
var tra1 = new bank_js_1.Transaction(102, 5000, "savings", ["26", "bank"]);
var tra2 = new bank_js_1.Transaction(105, 3000, "personal", ["31", "cash"]);
var tra3 = new bank_js_1.OnlineTranasaction(111, 7000, "student", ["11", "fees"], "app");
var tra4 = new bank_js_1.OnlineTranasaction(201, 10000, "loan", ["20", "emi"], "website");
var transactions = [tra1, tra2, tra3, tra4];
function calculateTotal(transaction) {
    var total = 0;
    for (var i = 0; i < transactions.length; i++) {
        total += transactions[i].amount;
    }
    return total;
}
transactions.forEach(function (t) { return console.log(t.getDetails()); });
console.log("Total Amount is" + calculateTotal(transactions));
