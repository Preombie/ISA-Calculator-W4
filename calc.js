/*
 * Implement all your JavaScript in this file!
 */
var number = "";
var firstNumber = "";
var operator = "";

const TextElement = document.getElementById("display");

document.getElementById("button1").addEventListener("click",()=>{
    number+=document.getElementById("button1").value;
    TextElement.value = number;
})
document.getElementById("button2").addEventListener("click",()=>{
    number+=document.getElementById("button2").value;
    TextElement.value = number;
})
document.getElementById("button3").addEventListener("click",()=>{
    number+=document.getElementById("button3").value;
    TextElement.value = number;
})
document.getElementById("button4").addEventListener("click",()=>{
    number+=document.getElementById("button4").value;
    TextElement.value = number;
})
document.getElementById("button5").addEventListener("click",()=>{
    number+=document.getElementById("button5").value;
    TextElement.value = number;
})
document.getElementById("button6").addEventListener("click",()=>{
    number+=document.getElementById("button6").value;
    TextElement.value = number;
})
document.getElementById("button7").addEventListener("click",()=>{
    number+=document.getElementById("button7").value;
    TextElement.value = number;
})
document.getElementById("button8").addEventListener("click",()=>{
    number+=document.getElementById("button8").value;
    TextElement.value = number;
})
document.getElementById("button9").addEventListener("click",()=>{
    number+=document.getElementById("button9").value;
    TextElement.value = number;
})
document.getElementById("button0").addEventListener("click",()=>{
    number+=document.getElementById("button0").value;
    TextElement.value = number;
})
document.getElementById("equalsButton").addEventListener("click",()=>{
    var num1 = Number(firstNumber);
    var num2 = Number(number);
    if(operator == "+"){
        TextElement.value  = num1 + num2;
        firstNumber =  num1 + num2
        number= "";
    }
    if(operator == "-"){
        TextElement.value  = num1 - num2;
        firstNumber =  num1 - num2
        number= "";
    }
    if(operator == "*"){
        TextElement.value  = num1 * num2;
        firstNumber =  num1 * num2
        number= "";
        
    }
    if(operator == "/"){
        TextElement.value  = num1 / num2;
        firstNumber =  num1 / num2
        number= "";
    }
    
})

document.getElementById("addButton").addEventListener("click",()=>{
    firstNumber = number;
    number = "";
    operator ="+"
    TextElement.value = operator
})
document.getElementById("subtractButton").addEventListener("click",()=>{
    firstNumber = number;
    number = "";
    operator ="-"
    TextElement.value = operator
})
document.getElementById("multiplyButton").addEventListener("click",()=>{
    firstNumber = number;
    number = "";
    operator ="*"
    TextElement.value = operator
})
document.getElementById("divideButton").addEventListener("click",()=>{
    firstNumber = number;
    number = "";
    operator ="/"
    TextElement.value = operator
})
document.getElementById("clearButton").addEventListener("click",()=>{
    number = "";
    operator =""
    TextElement.value = ""
})
