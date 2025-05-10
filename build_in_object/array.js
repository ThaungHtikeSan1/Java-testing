const fruits = ["apple", "banana", "orange", "grape", "mango"];

console.dir(Array);
console.log(fruits);

//toString==> Arrary to String
console.log(fruits.toString());

//join==> Array to String("==")
console.log(fruits.join("***"));

//sort ==> A Z to a z
console.log(fruits.sort());

//reverse ==> lastIndex to firstIndex
console.log(fruits.reverse());

//push, pop ==> (last in/out)
console.log(fruits.push("DragonFruit"));
console.log(fruits);
fruits.push("chilies")
console.log(fruits);
fruits.pop()
console.log(fruits);

//unshift/shift ==> (first in/out)
console.log(fruits.unshift("pineapple"));
console.log(fruits);
fruits.unshift("Watermelon")
console.log(fruits);

fruits.shift()
console.log(fruits);

