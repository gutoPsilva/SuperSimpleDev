document.querySelector('.js-reset-score-button').onclick = function(){
  score.wins = 0;
  score.ties = 0;
  score.losses = 0;
  updateScoreElement();
  localStorage.removeItem('score');
}

document.querySelector('.js-auto-play-button').addEventListener('click', autoPlay);



// || operador lógico OU, se tiver um localStorage 'score' pega esse, OU então utiliza o DEFAULT || 0
let score = JSON.parse(localStorage.getItem('score')) || {
  wins:0,
  losses:0,
  ties:0
}

updateScoreElement();

/* faz o mesmo que o || acima
if(!score){
  score = {
  wins:0,
  loses:0,
  ties:0
  }
}
*/

let isAutoPlaying = false;
let intervalId;

function autoPlay(){
  // senão estiver auto, começa
  if(!isAutoPlaying){
    intervalId = setInterval(function(){
      const playerMove = pickComputerMove();
      playGame(playerMove);
    }, 1000);
    isAutoPlaying = true;
  }
  else{
    clearInterval(intervalId);
    isAutoPlaying = false;
  }
}

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