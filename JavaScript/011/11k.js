function countPositive(nums){
  let positiveNums = 0;
  for(let i = 0; i<nums.length; i++){
    if(nums[i] > 0){
      positiveNums++;
    }
  }
  return positiveNums;
}

console.log(countPositive([-2, 3, -5, 7, 10]));