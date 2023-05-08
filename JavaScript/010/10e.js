function toggleStyle(buttonName){
  const buttonElement = document.querySelector(`.${buttonName}-button`);
  if(buttonElement.classList.contains('is-toggled')){
    buttonElement.classList.remove('is-toggled');
  }else{
    buttonElement.classList.add('is-toggled');
  }
}