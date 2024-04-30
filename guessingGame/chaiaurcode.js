let random = (parseInt(Math.random() * 100 + 1))
console.log(random);
const input = document.querySelector('#guessfield')
const button = document.querySelector('#button')
const result = document.querySelector('.result')
const remaining = document.querySelector('.lastResult')
const prevGuess = document.querySelector('.guesses')
const loworhigh = document.querySelector('#loworhigh')

const p = document.createElement('p')
let arr = [] 
let guessNo = 1

let playGame = true
if (playGame) {
    button.addEventListener('click', function(e){
        e.preventDefault()
        const guess = parseInt(input.value)
        console.log(guess);
        validate(guess)
    })
}

function validate(guess){
    if (isNaN(guess)) {
        alert('Please enter a valid number')
    }else if(guess < 0){
        alert('Please enter a number greater than 1')
    }else if(guess > 100){
        alert('Please enter a number lower than 100')
    }else{
        arr.push(guess)
        if (guessNo >= 10) {
            displayGuess(guess)
            displayMessage(`Game Over Random Number was ${random}`)
            end()
        } else {
            displayGuess(guess)
            check(guess)
        }
    }

}

function check(guess){
    if (guess === random) {
        displayMessage('You guessed it right');
        end();
    }else if (guess < random) {
        displayMessage('Your guess is too LOW');
    }else if(guess > random){
        displayMessage('Your guess is too HIGH');
    }
}

function displayMessage(message) {
    loworhigh.innerHTML = `<span>${message}</span>`
  }

function displayGuess(){
    input.value =''
    prevGuess.innerHTML = `${arr}`
    guessNo++
    remaining.innerHTML = `${11 - guessNo}`
}

function end(){
    input.value = ''
    input.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id = 'start'> Start new game</h2>`
    result.appendChild(p)
    playGame = false
    start()
}

function start(){
    const button2 = document.querySelector('#start')
    button2.addEventListener('click', function(e){
        random = parseInt(Math.random() * 100 + 1)
        arr = []
        guessNo = 1
        prevGuess.innerHTML = ''
        remaining.innerHTML = `${11 - guessNo}`
        input.removeAttribute('disabled');
        result.removeChild(p)
        playGame = true
    })
}