function findIndex(array, word){
  for(let i = 0; i<array.length; i++){
    if(array[i] === word){
      return i;
    }
  }
  return -1;
}

function unique(array){
  const resultArray = [];
  for(let i = 0; i<array.length; i++){
    const word = array[i];
    if(findIndex(resultArray, word) === -1){
      resultArray.push(array[i]);
    }
  }
  return resultArray;
}

console.log(findIndex(['green', 'red', 'blue', 'red'], 'red'));
console.log(findIndex(['green', 'red', 'blue', 'red'], 'yellow'));

console.log(unique(['green', 'red', 'blue', 'red']));
console.log(unique(['green', 'red', 'green', 'red']));