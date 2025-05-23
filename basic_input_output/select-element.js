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

// const domElement=document.querySelector("#domObj")
// console.dir(domElement)
// console.log(domElement.id);
// console.log(domElement.classList);
// console.log(domElement.className);
// console.log(domElement.title);
// console.log(domElement.style);
// domElement.style.color = "blue"
// domElement.style.fontSize = "50px"
// console.log(domElement.style.color);

// const addBgColorBtn=document.querySelector("#addBgBtn")

// addBgColorBtn.onclick=()=>{
//     domElement.style.backgroundColor="black"
// }

// const box=document.querySelector(".box")
// const toggleBtn=document.querySelector("#toggleBtn")

// // console.dir(box);
// toggleBtn.onclick=()=>{
//     box.classList.toggle("hidden")
// }

// const skills=document.querySelectorAll(".btn")
// const skillsCount=document.querySelectorAll("#count")
// skills.forEach((skill)=>{
//         skill.onclick=()=>{
//             skill.classList.toggle("gray")
//             // console.log(skill);
//             const skillsCount=document.querySelectorAll(".btn.gray")
//             console.log(skillsCount);
//             count.innerText=skillsCount.length;
//         }
// })
const body=document.querySelector("body")
const heading=document.createElement("h1")
heading.innerText="Create Element"
body.append(heading)
console.log(heading);

const a=document.querySelector("a")
a.href="https://youtube.com"
console.log(a.href);

console.log(a.getAttribute("href"));
a.removeAttribute("target")
a.setAttribute("target","-blank")
console.log(a.getAttribute("target"));  

const img=document.querySelector("img")
console.log(img.src);
console.log(img.getAttribute("src"));
