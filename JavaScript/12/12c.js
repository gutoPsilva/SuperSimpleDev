const finishedButtonElement = document.getElementById('finish-button');
finishedButtonElement.addEventListener('click', updateElement);

function updateElement(){
  setTimeout(function(){finishedButtonElement.innerHTML = "Finished!"}, 1000);
}