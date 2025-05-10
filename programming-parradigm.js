//imperative
//1 procedural programming
//2 object oriented programming (OOP)

//imperative => lo chin tr ko a sint sint yay
const points = [34, 15, 2, 52, 19, 56, 30, 57];
// let total=0
// for(let i=0; i< points.length; i++){
//     total += points[i]
// }
// console.log(total);

//1 procedural programming => lo chin tr ko a sint sint yay pee function htl thein
// const arraySumFn=function(arr){
//     let total=0;
//     for(let i=0 ; i<arr.length; i++){
//         total += arr[i]
//     }return total
// }
// console.log(arraySumFn(points));

//OOP

const arraySumObj={
    arr:[],
    sum(){
        let total=0
        for(num of this.arr){
            total += num
        }
        return total;
    }
}
arraySumObj.arr=[1,2,3]
console.log(arraySumObj.sum());

arraySumObj.arr=points
console.log(arraySumObj.sum());