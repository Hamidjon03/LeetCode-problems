var buildArray = function (nums) {
  let ans = [];
  for (let i = 0; i < nums.length; i++) {
    ans.push(nums[nums[i]])
  }
  return ans
};

// var buildArray = function(nums){
//   return nums.map(a => nums[a])
// }