
function getComputerChoice() {
  const choice = [
    "Rock",
    "Paper",
    "Scissors"
  ]
  let computerChoice = choice[Math.floor(Math.random() * choice.length)]
  return computerChoice
}


function getResult(playerChoice, computerChoice) {
  
  let score



 
  if (playerChoice == computerChoice) {
    score = 0
  }


  else if (playerChoice == "Rock" && computerChoice == "Scissors") {
    score = 1
  }
  else if (playerChoice == "Paper" && computerChoice == "Rock") {
    score = 1
  }
  else if (playerChoice == "Scissors" && computerChoice == "Paper") {
    score = 1
  }
  
  else {
    score = -1
  }

  return score

}


function showResult(score, playerChoice, computerChoice) {
 

  let result = document.getElementById('result')
  switch (score) {
    case -1:
      result.innerText = `You Lose 😅!`
      break;
    case 0:
      result.innerText = `It's a Draw 😶!`
      break;
    case 1:
      result.innerText = `You Win! 🥇 🏆 `
      break;
  }

  let playerScore = document.getElementById('player-score')
  let hands = document.getElementById('hands')
  playerScore.innerText = `${Number(playerScore.innerText) + score}`
  hands.innerText = `👨🏽‍🎓 ${playerChoice} vs 🤖 ${computerChoice}`
}


function onClickRPS(playerChoice) {
  console.log({ playerChoice })
  const computerChoice = getComputerChoice()
  console.log({ computerChoice })
  const score = getResult(playerChoice, computerChoice)
  console.log({ score })
  showResult(score, playerChoice, computerChoice)
}



function playGame() {
 
  const rpsbuttons = document.querySelectorAll('.rpsbutton')

  
  rpsbuttons.forEach(rpsbutton => {
    rpsbutton.onclick = () => onClickRPS(rpsbutton.value)
  })

 
  const endGamebtn = document.getElementById('endGameButton')
  endGamebtn.onclick = () => {
    endGame()
  }

}


function endGame() {
  let playerScore = document.getElementById('player-score')
  let hands = document.getElementById('hands')
  let result = document.getElementById('result')

  hands.innerText = ' '
  playerScore.innerText = ' '
  result.innerText = ' '

}

playGame()
