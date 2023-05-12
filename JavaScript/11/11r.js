function removeEgg(foods){
  const noEggs = [];
  for(let i = 0; i<foods.length; i++){
    if(foods[i] === 'egg'){
      continue;
    }
    else{
      noEggs.push(foods[i]);
    }
  }
  return noEggs;
}

console.log(removeEgg(['egg', 'apple', 'egg', 'egg', 'ham']));