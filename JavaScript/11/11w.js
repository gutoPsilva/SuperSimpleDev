function findIndex(array, word){
  for(let i = 0; i < array.length; i++){
    if(array[i] === word){
      return i; // está na lista
    }
  }
  return -1; // não está na lista
}

function unique(array){
  const result = [];
  for(let i = 0; i < array.length; i++){
    const word = array[i];
    if(findIndex(result, word) === -1){
      result.push(word);
    }
  }
  return result;
}

console.log(unique(['green', 'red', 'blue', 'red']));