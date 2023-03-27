




var romanToInt = function (s) {
  let obj = {
    'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000,
  }
  let num = 0;
  for (let i = 0; i < s.length; i++) {
    let current = obj[s[i]];
    let next = obj[s[i + 1]]
    // <!-- if the next number is bigger then first thats mean he is a number-1 for example "IV" 1-5=4 -->
    if (current < next) {
      num -= current
    } else num += current
  }
  return num
};