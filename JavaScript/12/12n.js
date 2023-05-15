function removeEgg(foods){
  return foods.filter(value => value !== 'egg');
}

console.log(removeEgg(['egg', 'apple', 'egg', 'egg', 'ham']));