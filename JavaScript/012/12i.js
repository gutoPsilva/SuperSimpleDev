let messages = 2;

setInterval(() => {
  console.log(messages);
  if(messages === 0){
    document.title = "App";
  }else{
    document.title = `(${messages}) New Messages`
  }
}, 1000);

document.querySelector('.js-add-button').onclick = () => messages++;

document.querySelector('.js-remove-button').onclick = () => {
  if(messages - 1 < 0){
    return;
  }
  messages--;
};