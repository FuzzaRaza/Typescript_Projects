#!/usr/bin/env node

//++++++++++++++++++CURRENCY CONVERTER PROJECT+++++++++++++++
import { DefaultCurr, Entered, ExchangeCurr } from "./callData.js";

let Currencies = ["PakRupee", "USDollar", "Euro", "Pounds"]
let i: any = DefaultCurr.Currency;
let o: any = ExchangeCurr.currency;

for (let idx: number = 0; idx < Currencies.length; idx++) {
    if (Currencies[idx] == i) {
        console.log("Default", idx);
        var DefaultIndx;
        DefaultIndx = idx;
    }
}
for (var idx: number = 0; idx < Currencies.length; idx++) {
    if (Currencies[idx] == o) {
        var NewIndx;
        NewIndx = idx;
        console.log("New", NewIndx);
    }
}
// var n: number = NewIndx?.valueOf();
// console.log(n);
console.log("New", NewIndx,o);
let Price: number = 0;
switch (DefaultIndx) {
    case 0:
        const pkr = [1, 278.65, 296.43, 340.52];
        Price = Entered.Amount / pkr[NewIndx];
        Price.toFixed(2);
        console.log(Price);
        break;
    case 1:
        const usd = [0.0036, 1, 0.94, 0.82];
        Price = Entered.Amount / usd[NewIndx];
        Price.toFixed(2);
        console.log(Price);
        break;
    case 2:
        const eur = [0.0034, 1.06, 1, 0.87];
        Price = Entered.Amount / eur[NewIndx];
        Price.toFixed(2);
        console.log(Price);
        break;
    case 3:
        const pnd = [0.0029, 1.22, 1.15, 1];
        Price = Entered.Amount / pnd[NewIndx];
        Price.toFixed(2);
        console.log(Price);
        break;
    default:
}