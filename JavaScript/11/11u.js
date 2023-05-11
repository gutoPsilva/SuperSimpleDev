let foods = ['egg', 'apple', 'egg', 'egg', 'ham'];
function removeEggs(foods){
  let someEggs = [];
  let cont = 0;
  let copyFoods = foods.slice();
  copyFoods.reverse()
  for(let i = 0; i<copyFoods.length; i++){

    if(copyFoods[i] === 'egg' && cont < 2){
      cont++;
      continue; // para aqui e faz ITERAÇÃO no loop (somente se o if for atendido) o BREAK PARA TOTALMENTE O LOOP.
    }
    someEggs.push(copyFoods[i]); // só chega aqui após a contagem de 2 ovos
  }
  return someEggs.reverse();
}

console.log(removeEggs(foods));
console.log(foods);