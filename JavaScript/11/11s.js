function removeEggs(foods){
  let someEggs = [];
  let cont = 0;
  for(let i = 0; i<foods.length; i++){

    if(foods[i] === 'egg' && cont < 2){
      cont++;
      continue; // para aqui e faz ITERAÇÃO no loop (somente se o if for atendido) o BREAK PARA TOTALMENTE O LOOP.
    }
    someEggs.push(foods[i]); // só chega aqui após a contagem de 2 ovos
  }
  return someEggs;
}

console.log(removeEggs(['egg', 'apple', 'egg', 'egg', 'ham']));