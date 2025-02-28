// Create two variables, firstName and lastName
let name1 = "Andres"
let lastName = "Arias"
// Concatenate the two variables into a third variable called fullName
let fullName = name1 + " "+ lastName
// Log fullName to the console
console.log(fullName)

let name2 = "Emily"
let greeting = "Hi there"

// Create a function that logs out "Hi there, Emily!" when called

function hello(){

    // let fullGreetin = greeting +", "+ name2 +"!"
    // console.log(fullGreetin)

    console.log(greeting + ", " + name2 + "!")
}

hello()
// ---------------------------------------------------------
// Incrementing an decrementing skills

let myPoints = 3

// Create two functions, add3Points() and remove1Point(), and have them
//  add / remove points to/from the myPoints variable
function add3Points(){
    // myPoints= myPoints + 3
    myPoints += 3
}

function remove1Point(){
    // myPoints= myPoints - 1
    myPoints -= 1
}

add3Points()
add3Points()
add3Points()
remove1Point()
remove1Point()

// Call the functions to that the line below logs out 10
console.log(myPoints)
// ----------------------------------------------------------------

// Try to predict what each of the lines will log out
console.log("2" + 2)//22
console.log(11 + 7)//18
console.log(6 + "5")//65
// Note: If I have a string everythings is going to become into a string so It is not add operator
console.log("My points: " + 5 + 9)// My points: 14
console.log(2 + 2)//  4
console.log("11" + "14")// 1114