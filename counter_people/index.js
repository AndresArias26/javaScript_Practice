// initialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count



let count = 0
let countEl = document.getElementById("count-el")

// Grab the save-el paragrah and store it in a variable called saveEl
let saveEl = document.getElementById("save-el")

function increment(){
    // count = count + 1
    count += 1
    countEl.textContent= count
    console.log("The button was clicked")
}

// There are two way to achive this the teacher create a variable to storage the documnet.getElementById and I use another way

// let count = 0


// function increment(){
//     count = count + 1
//     document.getElementById("count-el").innerText= count
//     console.log("The button was clicked")
// }


// Create a function, save(), which logs out the count when it's called
function save(){
    // Create a variable that contains both the count and the dash separator, i.e. "12 - "
    // Reander the variable in the saveEl using innerText
    // NB: Make sure to not delete the existing content of the paragraph
    let countStr = count + " - "
    // saveEl.innerHTML += countStr
    saveEl.textContent += countStr

    
    countEl.textContent= 0
    count = 0

    console.log(count)
}
console.log("Let's count people on the subway!")



// document.getElementById("count-el").innerText = 5


// let firstBatch = 5
// let secondBath = 7

// let count = firstBatch + secondBath

// console.log(count)

// 1. Create a variable, myAge, and set its value to your age
// let myAge = 25

// 2.Log the myAge variable to the console
// console.log(myAge)


// 1. Create two variables, myAge and humanDogRatio
// let myAge = 25
// let humanDogRatio = 7

// 2. Multiply the two together and store the result in myDogAge
// myDogAge = myAge * humanDogRatio
// 3. Log myDogAge to the console
// console.log(myDogAge)
// -----------------------------------------------------------------------
// Create a variable, bonusPoints. Initialize it as 50. Increased it to 100
// Decrease it down to 25, and then finally increase it to 70

// let bonusPoints = 50
// console.log(bonusPoints)

// bonusPoints =  bonusPoints + 50
// console.log(bonusPoints)

// bonusPoints = bonusPoints - 75
// console.log(bonusPoints)

// bonusPoints = bonusPoints + 45
// console.log(bonusPoints)

// ---------------------------------------------------------------
// Global scope / outer scope
// let lap1 = 34
// let lap2 = 33
// let lap3 = 36
// Create a function that logs out the sum of all the lap times
// function logLapTime(){

//     let totalTime = lap1 + lap2 + lap3
//     console.log(totalTime)

    // I can skip to create a variable (totalTime) if I just write this:
    // console.log(lap1 + lap2 + lap3)
//}

// Take a note I can't access to the variable inside a function because It only excists inside of that block of code
// That why we call let variable block scoped

// logLapTime();

// --------------------------------------------------------------------

// let lapsCompleted = 0

// // Create a function that increments the lapsCompleted variable with one
// //Run it three times

// function increment(){
//     lapsCompleted = lapsCompleted + 1
//     // lapsCompleted++
// }

// increment()
// increment()
// increment()

// console.log(lapsCompleted)

// -----------------------------------------------------------------------

// let username = "Per"

// // Create a variable, message, that stores the string: "You have three new notifications"

// let message = "You have three new notifications"



// // Create a variable, messageToUser, that contains the message we have logged
// let messageToUser = message +", " +username + "!"

// console.log(messageToUser)

// -----------------------------------------------------------------------

// Create two variables, name and greeting. 
// The name variable should store your name, and the greeting should store e.g. "Hi, my name is "

// Create a third variable, myGreeting, that contatenates the two strings
// Log myGreeting to the console

// let name1 = "AstroGamer"
// let greet = "Hi, my name is "

// let myGreeting = greet + name1 + "!"

// console.log(myGreeting)

// ----------------------------------------------------------------------
// In a wrestling game between a string and a number and the string always wins

// let name = 42
// let greeting = "Hi, my name is "
// // console.log(greeting)

// let points = 4 
// let bonusPoints = "10"

// let totalPoints = points + bonusPoints

// console.log(totalPoints)
// // Look how when you mix a integer with a string the integer become a string

// console.log(4 + 5)// 9
// console.log("2" + "4")// 24
// console.log("5" + 1)// 51
// console.log(100 + "100")// 100100

// -----------------------------------------------------------------------------
// Grab the welcome-el paragraph and store it in a variable called welcomeEl

// Create two variables (name & greeting) that contains your name
// and the greeting we want to render on the page

// Render the welcome message using welcomeEL.innerText

// let welcomeEL = document.getElementById("welcome-el")

// let name2 = "Mr. Andres"
// let greeting = "Welcome back "

// welcomeEL.innerText= greeting + name2

// 56.30
// Add an emoji to the end! 👋
// Write your Code Below here
// Hint: count = count + 1

// There are two ways to do this Long and short using +=
// welcomeEL.innerText= welcomeEL.innerText + "👋" 
// welcomeEL.innerText += "👋" 

// += This operator take the current value you have, and then adds something after it.

// -----------------------------------------------------------------------------------