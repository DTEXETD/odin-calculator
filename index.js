// PLZ REDO THIS LOGIC ?_?

let firstClick = 0
let fNum = 0
let sNum = 0
let onlyOnce = 0
let opClicked = 0
let equalsClicked = 0

const number = document.querySelectorAll(".number")
const display = document.querySelector("#display")
const op = document.querySelectorAll(".op")
const equals = document.querySelector(".orange")
const clear = document.querySelector(".clear")
const dot = document.querySelector(".dot")

dot.addEventListener("click", () => {
    if (display.textContent.includes(".")) return
    display.textContent += "."
})

clear.addEventListener("click", () => {
    fNum = 0
    sNum = 0
    onlyOnce = 0
    opClicked = 0
    equalsClicked = 0
    display.textContent = ""
})


const operators = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => a / b,
}

function operate(op, fNum, sNum) {
    return op(fNum, sNum)
}

function displayFNum(operator) {
    if (operator == "divide" && sNum == 0) {
        display.textContent = "NUH UH"
    } else {
        fNum = operate(operators[operator], Number(fNum), Number(sNum))
        fNum = Math.round(fNum * 10 ** 6) / 10 ** 6
        display.textContent = fNum
        if (fNum.toString().split("").length > 11) {
            display.textContent = "NaN"
        }
    }
}

for (let i = 0; i < op.length; i++) {
    op[i].addEventListener("click", () => {
        if (onlyOnce == 0) {
            fNum = display.textContent
            operator = op[i].className.replace("op ","")
            onlyOnce++
            } 

            if (sNum !== 0 && equalsClicked !== 1) {

                displayFNum(operator)
            }
            operator = op[i].className.replace("op ","")
            
            opClicked = 1
            firstClick = 1
            equalsClicked = 0
    })
}

for (let i = 0; i < number.length; i++) {
    number[i].addEventListener("click", () => {
        if(firstClick == 1) {
            display.textContent = ""
        }

        display.textContent += number[i].textContent

        if (onlyOnce != 0) {
            sNum = display.textContent
        }

        firstClick = 0
    })
}

equals.addEventListener("click", () => {
    if (sNum !== 0 && opClicked == 1) {
        displayFNum(operator)
        opClicked = 0
        firstClick = 1
        equalsClicked = 1
        onlyOnce = 0
    }
})