document.querySelector('.js-reset-score-button').onclick = function(){
  score.wins = 0;
  score.ties = 0;
  score.losses = 0;
  updateScoreElement();
  localStorage.removeItem('score');
  document.querySelector('.js-result').innerHTML = '';
  document.querySelector('.js-moves').innerHTML = '';
}

// || operador lógico OU, se tiver um localStorage 'score' pega esse, OU então utiliza o DEFAULT || 0
let score = JSON.parse(localStorage.getItem('score')) || {
  wins:0,
  losses:0,
  ties:0
}

/* 
faz o mesmo que o || acima

if(!score){
  score = {
  wins:0,
  loses:0,
  ties:0
  }
}
*/

updateScoreElement();

document.querySelector('.js-auto-play-button').addEventListener('click', autoPlay);

let isAutoPlaying = false;
let intervalId;

// const autoPlay = () => {

// };
// AUTOPLAY ligado não permite que o usuário jogue.
function autoPlay() {
  if(!isAutoPlaying){
    document.querySelector('.js-auto-play-button').innerHTML = 'Stop Auto Play';
    document.querySelector('.js-scissors-button').disabled = true;
    document.querySelector('.js-rock-button').disabled = true;
    document.querySelector('.js-paper-button').disabled = true;

    document.querySelector('.js-rock-button').removeEventListener('click', () => {
      playGame('Rock')
    });

    document.querySelector('.js-paper-button').removeEventListener('click', () => {
      playGame('Paper')
    });

    intervalId = setInterval(() => {
      const playerMove = pickComputerMove();
      playGame(playerMove);
    }, 1000);
    isAutoPlaying = true;
  }
  else{
    document.querySelector('.js-auto-play-button').innerHTML = 'Auto Play';
    document.querySelector('.js-scissors-button').disabled = false;
    document.querySelector('.js-rock-button').disabled = false;
    document.querySelector('.js-paper-button').disabled = false;

    clearInterval(intervalId);
    isAutoPlaying = false;
  }
}

document.querySelector('.js-scissors-button').addEventListener('click', () => {
  playGame('Scissors')
});

document.querySelector('.js-rock-button').addEventListener('click', () => {
  playGame('Rock')
});

document.querySelector('.js-paper-button').addEventListener('click', () => {
  playGame('Paper')
});

document.body.addEventListener('keydown', (event) => {
  if(event.key === 'r'){
    playGame('Rock');
  }
  else if(event.key === 'p'){
    playGame('Paper');
  }
  else if(event.key === 's'){
    playGame('Scissors');
  }
});

//funções permitem reutilizar trechos de código quando são chamadas
//função com parâmetro --> recebe valor
function playGame(playerMove){
  let result = '';
  const computerMove = pickComputerMove();

  if(playerMove === 'Scissors'){
    if(computerMove === 'Rock'){
      result = 'You lose!';
    } else if(computerMove === 'Paper'){
      result = 'You win!';
    }
    else{
      result = 'Tie';
    }
  }
  else if(playerMove === 'Paper'){
    if(computerMove === 'Rock'){
      result = 'You win!';
    } else if(computerMove === 'Paper'){
      result = 'Tie';
    }
    else{
      result = 'You lose!';
    }
  }
  else{
    if(computerMove === 'Rock'){
      result = 'Tie';
    } else if(computerMove === 'Paper'){
      result = 'You lose!';
    }
    else{
      result = 'You win!';
    }
  }

  if(result === "You win!"){
    score.wins += 1;
  }
  else if(result === "You lose!"){
    score.losses += 1;
  }
  else{
    score.ties += 1;
  }

  //localStorage guarda apenas STRINGS, por isso é necessário utilizar o JSON.stringify para pegar o objeto JS
  localStorage.setItem('score', JSON.stringify(score));
  updateScoreElement();
  
  document.querySelector('.js-result').innerHTML = result;
  document.querySelector('.js-moves').innerHTML = `You <img src="images/${playerMove}-emoji.png" alt="${playerMove}-emoji" class="move-icon"><img src="images/${computerMove}-emoji.png" alt="${computerMove}-emoji" class="move-icon"> Computer`;
}

function updateScoreElement(){
  document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

//função com return --> retorna valor
function pickComputerMove(){
  let computerMove = '';
  const randomNumber = Math.random();
  if(randomNumber >= 0 && randomNumber < 1/3){
    computerMove = 'Rock';
  } 
  else if(randomNumber >= 1/3 && randomNumber < 2/3){
    computerMove = 'Paper';
  } 
  else if(randomNumber >= 2/3 && randomNumber < 1){
    computerMove = 'Scissors';
  }
  
  return computerMove; // retorna ao local onde a função foi chamada com o valor da variável criada na função
  // não executa nada após o retorno
}