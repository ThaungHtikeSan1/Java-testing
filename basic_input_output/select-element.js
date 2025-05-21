// const heading=document.getElementById("heading")
// const h3=document.getElementsByTagName("h3")
// const list=document.getElementsByClassName("heading-three")
// console.dir(heading);
// console.dir(h3);
// console.dir(list);

// qyeryselectorAll/queryselector
// (h3,#id,.class)

// const h3=document.querySelectorAll(".heading-three")
// const h1=document.querySelectorAll("#heading")
// console.dir(h3)
// console.dir(h1[0])

// const h3=document.querySelector(".heading-three")
// console.dir(h3)

const domElement=document.querySelector("#domObj")
console.dir(domElement)
console.log(domElement.id);
console.log(domElement.classList);
console.log(domElement.className);
console.log(domElement.title);
console.log(domElement.style);
domElement.style.color = "blue"
domElement.style.fontSize = "50px"
console.log(domElement.style.color);

const addBgColorBtn=document.querySelector("#addBgBtn")

addBgColorBtn.onclick=()=>{
    domElement.style.backgroundColor="black"
}

const box=document.querySelector(".box")
const toggleBtn=document.querySelector("#toggleBtn")

// console.dir(box);
toggleBtn.onclick=()=>{
    box.classList.toggle("hidden")
}

