const lowerGuess = 10
const higherGuess = 1000
const secretNumber = generateRandomNumber()

function generateRandomNumber()
{
    return parseInt(Math.random() * higherGuess + 1)
}

console.log(secretNumber)

const elementLowerGuess = document.getElementById('lowerGuess')
elementLowerGuess.innerHTML = lowerGuess

const elementHigherGuess = document.getElementById('higherGuess')
elementHigherGuess.innerHTML = higherGuess
