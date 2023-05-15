let messages = 2;

setInterval(function(){
  console.log(messages);
  if(messages === 0){
    document.title = "App";
  }else{
    document.title = `(${messages}) New Messages`
  }
}, 1000);

document.querySelector('.js-add-button').onclick = function(){
  messages++;
}

document.querySelector('.js-remove-button').onclick = function(){
  if(messages - 1 < 0){
    return;
  }
  
  messages--;
}