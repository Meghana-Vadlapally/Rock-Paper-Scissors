let lost = 'OOPS!! You lost'
let won = 'Yippie!! You won'

let userChosen 
let computerChosen 

var result = results()

const displayResult = document.getElementById('result')
const computerChoice = document.getElementById('computer-choice')
const userChoice = document.getElementById('user-choice')
const alluserChoices = document.querySelectorAll('.choice')

const randomNumber = Math.round(Math.random() * (3))


// function for user choice

alluserChoices.forEach(choice => choice.addEventListener('click', (e) => {
    userChosen = e.target.id
    randomComputerChoice()
    results()
    userChoice.innerHTML = userChosen
    computerChoice.innerHTML = computerChosen
    displayResult.innerHTML = result
}))





// function for computer choice

function randomComputerChoice(){
    if(randomNumber === 1){
        return computerChosen = 'rock'

    }
    else if(randomNumber === 2){
        return computerChosen = 'paper'
    }
    else if(randomNumber === 3){
        return computerChosen = 'scissors'
    }
}

// function to get results

function results(){
    if(computerChosen === userChosen){
        return result = "It's a Tie!!!"
    }
    else if(computerChosen === 'rock' && userChosen === 'paper'){
        return result = won
    }
    else if(computerChosen === 'rock' && userChosen === 'scissors'){
        return result = lost

    }
    else if(computerChosen === 'paper' && userChosen === 'rock'){
        return result = lost

    }
    else if(computerChosen === 'paper' && userChosen === 'scissors'){
        return result = won

    }
    else if(computerChosen === 'scissors' && userChosen === 'rock'){
        return result = won

    }
    else if(computerChosen === 'scissors' && userChosen === 'paper'){
        return result = lost

    }
}