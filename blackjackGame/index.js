// How the game work?
// If you get less less than or equal to 20,  you are still in the game 🙂
// If you get the number 21 you win !!!!!🏆
// If you get > 21 you lose T_T 😭

// 1. Create two variables, firstCard and secondCard.
// Set their values to a random number between 2 - 11

// 2. Create a variable, sum, and set it to the sum of the two cards

let firstCard = 12
let secondCard = 9

let sum = firstCard + secondCard
// Get the state when we win
let hasBlackJack = false

// Create a variable called isAlive and assign it to true
// Flip its value to false in the appropiate code block
let isAlive= true

// Declare a variable called message and assign its value to an empty string
// Reassign the message variable to the string we're logging out

let message= ""

// Store the message-el paragraph in a variable called messageEl
let messageEl = document.getElementById("message-el")

// Create a startGame() function. Move the conditional 
// below inside the body of the function

function startGame(){

    if (sum <= 20){
        message = "Do you want to draw a new card? 🙂"
     }
     // if the sum "strictly" equal to 21?
     else if(sum === 21){
         message = "Wohoo! You've got Blackjack! 🏆"
         hasBlackJack = true
     }
     // else if (sum > 21){
     //     console.log("You're out of the game!! 😭")
     // }   
     // If you notice there are not another alternative so you dont need to add another condition
     else {
         message = "You're out of the game!! 😭"
         isAlive = false
     }   

    //  Display the message in the messageEl using messageEl.textContent
    messageEl.textContent = messag
    console.log(message)
     
     // CASH OUT!
        console.log(hasBlackJack)
        console.log(isAlive)
}






// ---------------------------------------------------
// Another Practice
// Check if the person is old enough to enter the nightclub (21)
// Log a suitable message to the console in both cases

// let age = 22

// // if less than 21 -> "You can not enter the club!"
// // else            -> "Welcome!"

// if(age < 21){
// console.log("You can not enter the club!")
// }
// else{
//     console.log("Welcome!")
// }

// ------------------------------------------------------------
// Another Practice
// Check if the person is elegible for a birthday card from the King of Norway! (100 years old)

// let age = 100

// If less than 100     -> "Not elegible"
// else if exactly 100  -> "Here is your birthday card from the King!"
// else                 -> "Not elegible, you have already gotten one"


// if( age < 100){
//     console.log("Not elegible")
// }
// else if (age === 100){
//     console.log("Here is your birthday card from the King!")

// }
// else{
//     console.log("Not elegible, you have already gotten one")
// }

// console.log(4 === 3) //f
// console.log( 5 > 2) //t
// console.log(12 > 12) //f
// console.log(3 <0 )//f
// console.log(11 <=11) //t
// console.log(3 <= 2)//f