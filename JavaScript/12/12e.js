const addElement = document.querySelector('button');
const pElement = document.querySelector('p');

addElement.onclick = function (){
  pElement.innerHTML = "Added";
  setTimeout(function(){
    pElement.innerHTML = ""
  }, 2000);
}