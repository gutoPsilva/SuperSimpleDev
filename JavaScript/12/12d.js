const finishedButtonElement = document.getElementById('finish-button');
finishedButtonElement.addEventListener('click', updateElement);

function updateElement(){
  finishedButtonElement.innerHTML = "Loading..."
  setTimeout(() => finishedButtonElement.innerHTML = "Finished!", 1000);
}