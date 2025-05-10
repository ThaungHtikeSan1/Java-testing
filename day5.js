// const results = []
// let index=0

// const area =  function(width=0,breadth=0){
//         let cal = width * breadth;
//         results[index++] = { width, breadth, result : cal};
//         return `${cal} sqft`;
// }

// console.log(area(30,40));
// console.log(area(20,40));
// console.log(area(30,50));
// console.log(results);
// console.table(results); 

// const rate = {
//     usd : 3000,
//     sgd : 2500
// }

// rate["usd"]

// const exchangeToMMK=function(amount,currency){
//     let result= amount * rate[currency]
//     return `${result} mmk`
// }

// console.log(exchangeToMMK(3,"usd"));
// console.log(exchangeToMMK(6,"sgd"));

// const exchangetoUSD=function(amount,currency){
//     let result = amount / rate[currency]
//     return `${result}$`
// }

// console.log(exchangetoUSD(900000,"usd"));

// const results =[]
// let index = 0

// const buyingfruit= function(fruitname,quantity,price,percent=5){
//     let calper = quantity * (price*(percent/100))
//     let cost = price + calper
//     results[index++] = {fruitname,quantity,price,percent : calper , result : cost }
//     return `${fruitname} ${quantity} ${price} ${calper} ${cost}`
// }

// console.log(buyingfruit("Orange",3,3000));
// console.log(buyingfruit("Jackfruit",4,8000));
// console.log(buyingfruit("Durin",4,11500));
// console.log(results);
// console.table(results);
let total = 0
const buyfruit= function(fruitname,price,quantity){
        let cost = price * quantity
        total += cost
        return `${fruitname} ${price} * ${quantity} => ${cost}`
}

const Findtax= function(totalAmount,percentage){
        let tax = totalAmount * (percentage/100)
        return tax
}

console.log(buyfruit("Orange",2500,3));
console.log(buyfruit("Apple",4500,3));
console.log("total =>", total);

let tax = Findtax(total,5)
console.log("tax =>", tax);

let netTotal = total + tax
console.log("netTotal =>", netTotal);
