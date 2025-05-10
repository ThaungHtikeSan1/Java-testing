// let x=5;
// console.log(x);

// function findAge (year){
//     let currentyear = 2024;
//     let age = currentyear - year;
//     return age;
// }

// console.log(findAge(1998));

// let total = 0;
// function buyfruit (fruitname,quantity,price){
//     let cost = quantity * price ;
//     total += cost; 
//     let result = fruitname + " => " + quantity + " * " + price + " = " + cost;
//     return result;
// }

// console.log(buyfruit("mango",7,350));
// console.log(buyfruit("banana",8,425));
// console.log(total);

// function findtax (total,percentage){
//     let tax = total * percentage/100;
//     return tax;
// }

// console.log(findtax(total,5));

// let tax = findtax (total,5);
// console.log(tax);

// let nettotal = total + tax;
// console.log(nettota);

// conditional

// function isEvenorOdd(number){
//     let remainder = number%2
//     if(remainder==0){
//         return number + " it is even";
//     }else{
//         return number + " it is odd";
//     }     
// }

// console.log(isEvenorOdd(2));
// console.log(isEvenorOdd(5));
// console.log(isEvenorOdd(111));

function PassorFail(Mark){
    if(Mark>=40){
        return Mark + " is Passed";
    }else{
        return Mark + " is Failed";
    }
}

// console.log(PassorFail("Zaw Zaw",39));
// console.log(PassorFail("May",90));

let markArr = [40,60,70,80,90,100]

let markObj = {
    myanmar : 40,
    english : 60,
    mathemetic : 70,
    chemistry : 80,
    physics : 90,
    biology : 100
}

let Marks = [
    {id:1, sub: "Myanmar", short: "mm", mark: 40},
    {id:1, sub: "English", short: "eng", mark: 60},
    {id:1, sub: "Mathemetics", short: "math", mark: 70},
    {id:1, sub: "Chemistry", short: "che", mark: 80},
    {id:1, sub: "Physics", short: "phy", mark: 90},
    {id:1, sub: "Biology", short: "bio", mark: 100},
]
    

// console.log(Marks);

// for(let i=100; i>=0; i--){
//     console.log(i);
// }


// for(let i=0; i<markArr.length; i++){
//     console.log(PassorFail(markArr[i]));
// }

// for(x of markArr){
//     console.log(PassorFail(x));
// }

// for(x in markObj){
//     console.log(PassorFail(markObj[x]));
// }

for(x of Marks){
    console.log(x.mark, x.sub , PassorFail(x.mark));
}