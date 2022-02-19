let input = document.getElementById("number");
let button = document.getElementById("generate");
let luckyNumber = document.getElementById("lucky-numbers");
let textLuck = document.getElementById("good-luck");

let myNumber = ()=>{
    return (Math.floor(Math.random()*99+1));    
} 

let firstSix = () => {
let list = []
while (list.length < 6) {
    let number = myNumber()
    if (!list.includes(number)) {
        list.push(number);        
    }         
}
return list.sort(); 
}

let superStar = ()=> myNumber(); 
let joker = () => myNumber(); 

while (firstSix().includes(joker)) {
    joker = myNumber();
}

button.addEventListener("click", ()=>{
    Number(input.value) < 1
    if (Number(input.value) < 1 || Number(input.value) > 8) {
        alert('Please enter a number between 1 to 8')
        input.value= ""
        
    }else{
        luckyNumber.innerHTML = ""
        textLuck.innerHTML = ""
        for (let i = 0; i < input.value; i++) {
            let newP = document.createElement("p");
            let newText = `${firstSix().join(" - ")}  |  ${joker()}  |  ${superStar()}`
            newP.innerText = newText
            luckyNumber.appendChild(newP);
        } 
        let newP2 = document.createElement("p");
        let newText2 = `GOOD LUCK`
        newP2.innerText = newText2
        textLuck.appendChild(newP2)
    }
    });