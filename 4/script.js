
// 1470 - problem

function shuffle(nums, n){
  let result = [];
  
  for(let i = 0; i < n; i++){
    result.push(nums[i]);
    result.push(nums[i + n]);
  }

  console.log(result);
}

shuffle([1, 3, 5, 2, 4, 6], 3);









