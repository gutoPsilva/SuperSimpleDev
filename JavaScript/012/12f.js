const addElement = document.querySelector('button');
const pElement = document.querySelector('p');

let resetTimer = false;
let timeoutId;

addElement.onclick = () => {
  if(!resetTimer){
    timeoutId = setTimeout(() => pElement.innerHTML = "", 2000);
    pElement.innerHTML = "Added";
    resetTimer = true;
  }
  else{
    clearInterval(timeoutId);
    resetTimer = false;
  }
}