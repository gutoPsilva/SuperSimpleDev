function minMax(nums){
  let objMinMax = {min: null, max: null};
  for(let i = 0; i<nums.length; i++){
    const value = nums[i];

    if(objMinMax.min === null || objMinMax.min > value){
      objMinMax.min = value;
    }

    if(objMinMax.max === null || objMinMax.max < value){
      objMinMax.max = value;
    }
  }
  return objMinMax;
}

console.log(minMax([-5, 3]));