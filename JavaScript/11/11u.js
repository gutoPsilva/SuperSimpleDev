function removeEgg(foods){
  const reversedFoods = foods.slice();
  reversedFoods.reverse();
  const someEggs = [];
  let cont = 0;
  for(let i = 0; i<reversedFoods.length; i++){
    if(reversedFoods[i] === 'egg' && cont < 2){
      cont++;
      continue;
    }
    else{
      someEggs.push(reversedFoods[i]);
    }
  }
  return someEggs.reverse();
}

const foods = ['egg', 'apple', 'egg', 'egg', 'ham'];
console.log(removeEgg(foods));
console.log(foods);