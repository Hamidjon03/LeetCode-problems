// 1480 problem

function runningSum(nums) {
  let array = [];

  for (let i = 0; i < nums.length; i++) {
    if (i == 0) {
      array.push(nums[i])
    } else {
      array.push(array[i-1] + nums[i])
    }
  }

  console.log(array);
}

runningSum([1, 1, 1, 1, 1])


