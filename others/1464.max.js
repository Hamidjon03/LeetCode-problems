var maxProduct = function (nums) {
  const max1 = Math.max(...nums);
  nums.splice(nums.indexOf(max1), 1)

  const max2 = Math.max(...nums);

  return (max1 - 1) * (max2 - 1)
};