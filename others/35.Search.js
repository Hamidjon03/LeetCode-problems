var searchInsert = function (nums, target) {
  nums.push(target)
  let sortedArray = nums.sort((a, b) => a - b);
  return sortedArray.indexOf(target);
};