const width = document.getElementById("width")
const breadth = document.getElementById("breadth")
const calculateBtn = document.getElementById("calculateBtn")
const result = document.getElementById("result")
const clearBtn = document.getElementById("clearBtn")
const restoreBtn = document.getElementById("restoreBtn")
const list = document.getElementById("list")

//area fn
const area = (w,b)=> w * b

calculateBtn.onclick=()=>{
    const w=width.valueAsNumber
    const b=breadth.valueAsNumber
    const a=area(w,b)
    result.innerText= `${a} ft * ${b} ft = ${a} sqft`
    width.value =""
    breadth.value=""
}

clearBtn.onclick=()=>{
    result.innerText=""
}

restoreBtn.onclick=()=>{
    list.innerHTML += `<li>${result.innerText}</li>`
    result.innerText=""
}
