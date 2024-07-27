let fNum = 0
let sNum = 0
let operator = add

const number = document.querySelectorAll(".number")
const display = document.querySelector("#display")

function add(a, b) {
    return a + b
}

function subtract(a, b) {
    return a - b
}

function multiply(a, b) {
    return a * b
}

function divide(a, b) {
    return a / b
}

function operate(op, fNum, sNum) {
    return op(fNum, sNum)
}

for (let i = 0; i < number.length; i++) {
    number[i].addEventListener("click", () => {
        let currentVal = display.textContent += number[i].textContent
        console.log(currentVal)
    })
}

console.log(operate(multiply, 3, 55))