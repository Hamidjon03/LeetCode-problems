function twoSum(nums, target){
  for(let i = 0; i < nums.length; i++){
    for(let j = 0; j < nums.length; j++){
      if(i == j){
        continue
      }
      if(nums[i] + nums[j] == target){
        return [i, j]
      }
    }
  }
}

console.log(twoSum([3,1,3], 6));