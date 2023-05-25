function removeEgg(foods){
  let cont = 0
  const filteredFoods = foods.filter(value => {
    if(value === 'egg' && cont < 2){
      cont++;
      return false;
    }
    else{
      return true;
    }
  });

  return filteredFoods;
}

console.log(removeEgg(['egg', 'apple', 'egg', 'egg', 'ham']));