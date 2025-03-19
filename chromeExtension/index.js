// Create two variables:
// myLeads - should be assigned to an empty array
// inputEl → should be assigned to the text input fi

let myLeads = []
const inputEl = document.getElementById("input-el")


// Select a button using html and js
// Log out "Button clicked!" when the user clicks the "SAVE INPUT" button
// function saveLead(){
//     console.log("SAVE Button clicked!")
// }

// Another way to select a button using just JS
// It is better just use the code in JS and keep HTML clean

const inputBtn = document.getElementById("input-btn")

inputBtn.addEventListener("click", function(){
    console.log("Button clicked from addEventListener")
})