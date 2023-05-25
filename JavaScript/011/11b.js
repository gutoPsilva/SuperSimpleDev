function getLastValue(array){
  const lastIndex = array.length - 1;
  return array[lastIndex];
}

const array1 = ['hi', 'hello', 'good'];
console.log(getLastValue(array1));