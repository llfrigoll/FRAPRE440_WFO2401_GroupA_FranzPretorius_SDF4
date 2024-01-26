//Creating all the variables necessary
//Card variables, Boolean variables for outcomes and the sum for cards drawn
//Array for cards
//Message variable for the outcome message
//El variables for the html elements
let firstCard = getRandomCard()
let secondCard = getRandomCard()
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

//Generates a random card between 1-11, based on Blackjack rules
function getRandomCard() {
    let randomNum = Math.floor(Math.random() * 13) + 1
    if (randomNum === 1) {
        return 11
    } else if (randomNum > 10) {
        return 10
    } else {
        return randomNum
    }
    
}

//Does some initialisation and calls renderGame()
function startGame() {
    renderGame()
}

//Updates the html with the correct info
function renderGame() {
    cardsEl.textContent = "Cards: "

    //Loop that displays all cards in array
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }

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

//Draws a new card and adds it to sum and cards array and renders the game state again
function newCard() {
    console.log("Drawing a new card from the deck!")

    let newCard = getRandomCard()
    sum += newCard
    cards.push(newCard)
    renderGame()
}