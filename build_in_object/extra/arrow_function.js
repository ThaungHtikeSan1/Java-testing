// Function Statement
function run(x){
    return " this is run"
}

//function expression
const run2 = function(){
    return "this is run2"
}

//Arrow Function
const run3 = ()=>{
    return "this is run3"
}

const run4 = x=>{
    return "this is run4"
}

const run5 = _=>{
    return "this is run5"
}

const run6 = x=>"this is run6"

console.log(run());
console.log(run2());
console.log(run3());
console.log(run4());
console.log(run5());
console.log(run6());