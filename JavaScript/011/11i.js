function addNum(array, num){
  const newArray = [];
  for(let i = 0; i<array.length; i++){
    newArray.push(array[i] + num);
  }
  return newArray;
}

const pop1 = [-2, -1, 0, 99]
console.log(addNum(pop1, 2));