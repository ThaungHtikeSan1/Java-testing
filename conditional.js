// {
//     let x=10
//     console.log(x);
// }

// function test(){
//     let x=15
//     console.log(x);
// }
// test()
// let x=10
// if(true){
//     x=30
//     console.log(x);
// }
// x=50
// console.log(x);

// if(true){
//     console.log("this is true");
// }else{
//     console.log("this is false");
// }

// ternary operator
// console.log(true ? "this is true" : "this is false");
// console.log(false ? "this is true" : "this is false");

// console.log(true && true);
// console.log(true && false);

// console.log(true || true);
// console.log(true || false);

// console.log(!true);
// console.log(!false);

// const wakeup= function(hour){
//     if(hour<8){
//         return " good habbit";
//     }
//     return " bad habbit"
// }

// console.log(wakeup(9));
// console.log(wakeup(7));

// const busfee=function(money){
//     // if(money==200 || money >200){
//     //     return "you can ride";
//     // }
//     if(money>=200){
//         return "you can ride"
//     }
//     return "you must walk"
// }
// console.log(busfee(200));
// console.log(busfee(100));

// let Money=1000
// const reqMoney=function(payMoney){
//     if(payMoney>Money){
//         return "I can go school"
//     }
//     return "I cannot go"
// }
// console.log(reqMoney(1400));
// console.log(reqMoney(300));

// const classTime=function(time){
//         if(time<=10){
//             return " I can wait"
//         }
//         return " I wil teach"
// }
// console.log(classTime(11));

// const Exam= function(mark){
//     if(mark>=80){
//         return " You are speical"
//     }else if(mark>40){
//         return " You passed"
//     }else if(mark<40){
//         return " You failed"
//     }
// }
// console.log(Exam(30));
// console.log(Exam(60));
// console.log(Exam(90));

// const Entrance=function(writing,speaking){
//     if(writing>=60 && speaking>=60){
//         return "You passed";
//     }
//     return "You failed";
// }
// console.log(Entrance(75,80));
// console.log(Entrance(55,40));
// console.log(Entrance(80,58));

// const canVote=function(age,nationality){
//     if(age>=18 && nationality=="mm"){
//         return "You can vote"
//     }
//     return "You cannot vote"
// }
// console.log(canVote(19,"mm"));
// console.log(canVote(17,"vn"));

// const MMSIT=function(Bus){
//     if(Bus==65 || Bus==20){
//         return "You can arrive"
//     }
//     return "You cannot arrive"
// }
// console.log(MMSIT(65));
// console.log(MMSIT(20));
// console.log(MMSIT(43));

// const eat=function(food){
//     if(food=="hotpot" || food=="MalaXiaGuo"){
//         return "We will full"
//     }
//     return "We still hungry"
// }
// console.log(eat("hotpot"));
// console.log(eat("MalaXiaGuo"));
// console.log(eat("ice-cream"));

// switch

const fruit = "banana";
switch (fruit) {
    case "apple":
        console.log("apple is red color");
        break;
    case "orange":
        console.log("orange is orange color");
        break;
    case "banana":
        console.log("banana is yellow color");
        break;
    default:
        console.log("I don't know this fruit");
}