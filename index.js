//Creating all the variables necessary
//Card variables, Boolean variables for outcomes and the sum for cards drawn
//Message variable for the outcome message
//El variables for the html elements
let firstCard = 10
let secondCard = 4
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

//Updates the html with the correct info
function startGame() {
    cardsEl.textContent = "Cards: " + firstCard + " " + secondCard
    sumEl.textContent = "Sum: " + sum
    //Updates message pertaining on the sum value
    //Sets won and lost conditions as booleans
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}

//Draws a new card and adds it to sum
function newCard() {
    console.log("Drawing a new card from the deck!")

    let newCard = 5
    sum += newCard
    startGame()
}