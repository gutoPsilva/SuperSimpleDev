const finishedButtonElement = document.getElementById('finish-button');
finishedButtonElement.addEventListener('click', updateElement);

function updateElement(){
  setTimeout(() => finishedButtonElement.innerHTML = "Finished!", 1000);
}