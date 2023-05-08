const gamingButtonElement = document.querySelector('.gaming-button');

function toggleStyle(){
  if(gamingButtonElement.classList.contains('is-toggled')){
    gamingButtonElement.classList.remove('is-toggled');
  }else{
    gamingButtonElement.classList.add('is-toggled');
  }
}