function arraySwap(array){
  let lastIndex = array.length-1;
  let aux = array[0];
  array[0] = array[lastIndex];
  array[lastIndex] = aux;
  return array;
}

const array1 = ['good', 'hello', 'hi']

console.log(arraySwap(array1));