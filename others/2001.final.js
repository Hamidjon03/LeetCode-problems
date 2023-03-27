var finalValueAfterOperations = function (operations) {
  let num = 0;
  for (let el of operations) {
    if (el === 'X++' || el === '++X') {
      num++
    } else if (el === 'X--' || el === '--X') {
      num--
    } else {
      return num
    }
  }

  return num
};