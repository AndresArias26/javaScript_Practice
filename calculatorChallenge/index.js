let num1 = 8
let num2 = 2
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

// Create four functions: add(), substract(), divide(), multiply()
// Call the correct function when the user clicks on one of the buttons
// Perform the given calculation using num1 and num2
// Render the result of the calculation in the paragraph with id="sum-el"

// E.g. if the user clicks on the "Plus" button, you should render
// "Sum: 10" (since 8 + 2 = 10) inside the paragraph with id="sum-el"

// Andres Solution
// function add(){
//     let result = num1 + num2
//     document.getElementById("sum-el").textContent += result
// }

// function substract(){
//     let result = num1 - num2
//     document.getElementById("sum-el").textContent += result 
// }

// function divide(){
//     let result = num1 / num2
//     document.getElementById("sum-el").textContent += result
// }

// function multiply(){
//     let result = num1 * num2
//     document.getElementById("sum-el").textContent += result
// }

// Teacher Solution with Andres touch
let sumEl = document.getElementById("sum-el")

function add(){
    let result = num1 + num2
    sumEl.textContent += result
}
function substract(){
    let result = num1 - num2
    sumEl.textContent += result
}
function divide(){
    let result = num1 / num2
    sumEl.textContent += result
}
function multiply(){
    let result = num1 * num2
    sumEl.textContent += result
}