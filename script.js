function getComputerChoice() {
    let choice  =   Math.floor(Math.random()*3)
    let computerSelection   =   ''
    if (choice==0) {
        computerSelection += "rock"
    } else if (choice==1) {
        computerSelection += "paper"
    } else if (choice==2) {
        computerSelection += "scissors";
    }
    return computerSelection;
}
//variables set to record score set outside of the playGame function
let scoreYou    =   0;
let scoreComputer   =   0;

function playGame(playerSelection, computerSelection) {
    computerSelection   =   getComputerChoice();
    let result=''
    if (computerSelection ==  'rock' && playerSelection == 'paper') {
        result+= 'You threw ' + playerSelection + '. computer threw ' + computerSelection + '. you won';
        scoreYou++
    } else if (computerSelection == 'rock' && playerSelection == 'scissors') {
        result+= 'You threw ' + playerSelection + '. computer threw ' + computerSelection + '. you lost';
        scoreComputer++

    } else if (computerSelection == 'paper' && playerSelection == 'rock') {
        result+= 'You threw ' + playerSelection + '. computer threw '+computerSelection + '. you lost';
        scoreComputer++
    } else if (computerSelection == 'paper' && playerSelection == 'scissors') {
        result+= 'You threw ' + playerSelection + '. computer threw '+computerSelection + '. you won';
        scoreYou++

    } else if (computerSelection    ==  'scissors' && playerSelection   ==  'rock') {
        result+= 'You threw ' + playerSelection + '. computer threw '+computerSelection + '. you won';
        scoreYou++
    } else if (computerSelection    ==  'scissors' && playerSelection   ==  'paper') {
        result+= 'You threw ' + playerSelection + '. computer threw '+computerSelection + '. you lost';
        scoreComputer++

    }else if (computerSelection   ==  playerSelection) {
        result+= 'A draw!';
    }
document.getElementById('you_number').innerText =   0+  scoreYou
document.getElementById('computer_number').innerText    =   0+scoreComputer;
// outputs computer choice
    let compField   =   document.getElementById('computer_choice');
    if (computerSelection   ==  'rock') {
        compField.innerText =   '👊';
    } else if (computerSelection    ==  'paper') {
        compField.innerText =   '✋';
    } else if (computerSelection    ==  'scissors') {
        compField.innerText =   '✌';
    }

// outputs text depending on the result of the game
    let resultField =   document.getElementById('result_field')
    if (result== 'You threw ' + playerSelection + '. computer threw ' + computerSelection + '. you won') {
        resultField.classList.remove('draw');
        resultField.classList.remove('loss');
        resultField.classList.add('win');
    } else if (result== 'You threw ' + playerSelection + '. computer threw ' + computerSelection + '. you lost') {
        resultField.classList.remove('win');
        resultField.classList.remove('draw');
        resultField.classList.add('loss')
    } else {
        resultField.classList.remove('win');
        resultField.classList.remove('loss');
        resultField.classList.add('draw')
    }
    resultField.innerText   =   result;    
    console.log(scoreYou);
}

// reset button
function reset() {
    scoreYou    =   0;
    scoreComputer = 0;
    document.getElementById('you_number').innerText =   0;
    document.getElementById('computer_number').innerText    =   0;
    document.getElementById('result_field').innerText   =   ''
}