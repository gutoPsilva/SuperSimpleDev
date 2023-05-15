function countPositive(nums){
  let cont = 0;
  nums.forEach((value) => {
    if(value > 0){
      cont++;
    }
  })
  return cont;
}

console.log(countPositive([1, -3, 5]));
console.log(countPositive([-2, 3, -5, 7, 10]));