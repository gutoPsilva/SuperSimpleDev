function addOne(array){
  for(let i = 0; i<array.length; i++){
    array[i] += 1;
  }
  return array;
}

console.log(addOne([-2, -1, 0, 99]));