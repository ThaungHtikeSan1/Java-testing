console.dir(Math);

console.log(Math.PI);

const num1=32.553;
console.log(Math.floor(num1));

const num2=32.153;
console.log(Math.ceil(num2));

const num3=-2000;
console.log(Math.abs(num3));

console.log(Math.max(2,3,4,5));
console.log(Math.min(1,4,6,8));

console.log(Math.random());
console.log(Math.random()*10);
console.log(Math.floor(Math.random()*10));

const ran= Math.random()
console.log(Math.floor(ran*100));

function getRanNum(min,max){
        return Math.floor(ran*(max-min)+min);
}

console.log(getRanNum(50,100));