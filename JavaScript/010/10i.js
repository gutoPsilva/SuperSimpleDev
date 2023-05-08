let calculation = localStorage.getItem('calculated') || "";
let paragraphElement = document.querySelector('.result');
paragraphElement.innerHTML = calculation;

function updateCalculation(operOrNumber){
  calculation += operOrNumber;
  paragraphElement.innerHTML = calculation;
}

function calculate(){
  calculation = eval(calculation);
  localStorage.setItem('calculated', calculation);
  paragraphElement.innerHTML = calculation;
}