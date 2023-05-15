let messages = 2;

setInterval(function(){
  document.title = `(${messages}) New Messages`
}, 1000);

document.querySelector('.js-add-button').onclick = function(){
  messages++;
}

document.querySelector('.js-remove-button').onclick = function(){
  messages--;
}