var getConcatenation = function (nums) {
  return nums.concat(nums)
};

console.log(getConcatenation([1,2,1]))


/*

var getConcatenation = function(nums) {
    const result = [];
    for(let i= 0;  i< nums.length; i++) {
        result[i] = nums[i];
        result [i + nums.length] = nums[i]
    }
    return result;
};

*/