function guessValidation(guess)
{
    const number =+ guess;

    if (guess === 'game over') 
    {
        document.body.innerHTML = `
        <h1>Você descobriu um final secreto</h1>
        <button id="playAgain" class="buttonPlayAgain">Play Again</button>
        `
    }
    if (Number.isNaN(number))  //validação de se é realmente um número
    {
        elementGuess.innerHTML+= `
        <div>This isn't a valid number!</div>
        `
        return
    }

    if (number > higherGuess || number < lowerGuess) 
    {
        elementGuess.innerHTML+= `
        <div>the number must be between ${lowerGuess} and ${higherGuess}, please try again</div>
        `
        return
    }

    if (number === secretNumber)
    {
        document.body.innerHTML = `
        <h1>Congratulations!</h1>
        <h3>${guess} really was the secret number!</h3>
        <button id="playAgain" class="buttonPlayAgain">Play Again</button>
        `
    }
    else if (number > secretNumber) 
    {
        elementGuess.innerHTML+= `
        <div>The secret number is lower! <i class="fa-solid fa-arrow-trend-down"></i></div>
        `
    }
    else if (number < secretNumber) 
    {
        elementGuess.innerHTML+= `
        <div>The secret number is higher! <i class="fa-solid fa-arrow-trend-up"></i></div>
        `
    }
}

document.body.addEventListener('click', e => {
    if(e.target.id == 'playAgain')
    {
        window.location.reload()
    }
})