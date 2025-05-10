// for , for Of , for in

// for (let i=1; i<=10; i++){
//     console.log("*");
//     console.log("* *");
// }

// for(let i= (function(){
//         console.log("first statement => i=1");
//         return 1
// })();
// (function(){
//         let condition = i<=10;
//         console.log("Second statement =>", condition);
//         return condition
// })();
// (function(){
//         console.log("third statement => i++");
//         return i++
// })())
// {
//     console.log(i,"code block");
// }

// for(let i=1;i<=10;i++){
    
//     console.log(i);
//     if(i==5)break;
// }

// for(let i=1;i<=10;i++){
//     if(i==2 || i==4) continue;
//     console.log(i);
// }

const fruits = ["apple", "banana", "orange", "mango"];

// console.log(fruits.length);

// for(let i=0; i<=fruits.length; i++){
//     console.log(fruits[i]);
// }

// for( fruit of fruits){
//     console.log( fruit);
// }

// for(fruit in fruits){
//     console.log(fruits[fruit]);
// }

// const person = {
//     name: "John Doe",
//     age: 30,
//     gender: "male",
//     township: "Greenwood"
//   };

//   for(profile in person){
//     console.log(person[profile]);
//   }

// const people = [
//     { id: 1, name: "Alice", age: 25, gender: "female", township: "Lakeside" },
//     { id: 2, name: "Bob", age: 30, gender: "male", township: "Hilltop" },
//     { id: 3, name: "Charlie", age: 22, gender: "male", township: "Brookfield" },
//     { id: 4, name: "Diana", age: 27, gender: "female", township: "Riverside" },
//     { id: 5, name: "Ethan", age: 35, gender: "male", township: "Greenwood" }
//   ];

//   for(x of people){
//     for(i in x){
//         console.log(x[i]);
//     }
//     console.log("=============");
//   }

// while
let count = 1;
while(count <=5){
  console.log(count);
  count++
}

// do while
let count2 = 1;
do{
  console.log(count2);
  count2++
}while(count2<=5)
