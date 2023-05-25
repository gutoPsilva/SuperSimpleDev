function addArrays(array1, array2){
  const sumArray= [];
  for(let i = 0; i<array1.length; i++){
    sumArray.push(array1[i] + array2[i]);
  }
  return sumArray;
}

console.log(addArrays([1, 2, 3],[4, 5, 6]));