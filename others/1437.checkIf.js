/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var kLengthApart = function (nums, k) {
  // nums = [1, 0, 0, 1, 0, 1], k = 2
  let indexes = [];

  nums.forEach((num, idx) => {
    if (num === 1) {
      indexes.push(idx)
    }
  });

  console.log(indexes)

  let indexesLength = indexes.length;

  for (let i = 0; i < indexesLength - 1; i++) {
    for (let j = i + 1; j < indexesLength; j++) {
      if (indexes[j] - indexes[i] - 1 < k) {
        return false
      }
    }
  }

  return true

};

console.log(kLengthApart([1, 0, 0, 1, 0, 1], 2))