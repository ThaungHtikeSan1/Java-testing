//console
//window
//dom

// console.log(window);

// const x=window.prompt("input first number")
// const y=window.prompt("input second number")
// console.log(typeof x);
// console.log(parseFloat(x)+parseFloat(y));

// window.alert(parseFloat(x)+parseFloat(y))

// const result = window.confirm("sar pp lr")
// console.log(`${result ? "sar pp" : "ma sar ya thy buu"}`);

//birth year

// const age=window.prompt("input your age")
// console.log(2025-parseFloat(age));

//select an element

// console.log(document.getElementsByTagName("h1"));
// console.log(document.getElementsByTagName("p"));
// console.log(document.getElementsByTagName("input"));
// console.log(document.getElementsByTagName("button"));

// const heading=document.getElementById("heading")
// const para =document.getElementById("para")
// const textInput =document.getElementById("textInput")
const btn =document.getElementById("btn")
// const fruit=document.getElementById("fruits")
// console.dir(heading.innerHTML)
// console.dir(heading.innerText);

// console.log(fruit.innerHTML);
// console.log(fruit.innerText);

// console.dir(textInput);

//Set Text

console.log(heading.innerText);
// heading.innerText="Mingalarpar"
heading.innerText=textInput.value

const changeTitle=()=>{
    heading.innerText=textInput.value;
}

//Event
// btn.onclick=()=>{
//     changeTitle();
// }

//method 
// btn.addEventListener("click",changeTitle)