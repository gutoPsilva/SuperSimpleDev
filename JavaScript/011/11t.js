function removeEgg(foods){
  foods.reverse();
  const someEggs = [];
  let cont = 0;
  for(let i = 0; i<foods.length; i++){
    if(foods[i] === 'egg' && cont < 2){
      cont++;
      continue;
    }
    else{
      someEggs.push(foods[i]);
    }
  }
  return someEggs.reverse();
}

console.log(removeEgg(['egg', 'apple', 'egg', 'egg', 'ham']));