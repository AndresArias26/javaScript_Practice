// When the user clicks the purchase button, render out
// "Something went wrong, please try again" in the paragraph 
// that has the id="error".

let message1 = document.getElementById("error")
let message2 = "Something went wrong, please try again!!"


function errorM(){
message1.textContent= message2
console.log("Button Clicked")

}