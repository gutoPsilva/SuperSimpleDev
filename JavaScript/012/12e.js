const addElement = document.querySelector('button');
const pElement = document.querySelector('p');

addElement.onclick = () => {
  pElement.innerHTML = "Added";
  setTimeout(() => pElement.innerHTML = "", 2000);
}