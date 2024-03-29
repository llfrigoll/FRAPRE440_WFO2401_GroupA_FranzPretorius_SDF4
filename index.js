//Creating all the variables necessary
//Boolean variables for outcomes and the sum for cards drawn
//Array for cards
//Message variable for the outcome message
//El variables for the html elements
let player = {
    name: "Franz",
    chips: 150
}
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")

playerEl.textContent = player.name + ": $" + player.chips

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
//Defines first two initial cards
//Adds cards to array and adds them to sum
function startGame() {
    isAlive = true
    hasBlackJack = false
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
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
//Runs only if you haven't lost and haven't won
function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let newCard = getRandomCard()
        sum += newCard
        cards.push(newCard)
        renderGame()
    }
}
//I had a lot of fun, no particular struggles, it just took a while to put everything together
//Overall: very happy :)