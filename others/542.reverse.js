var reverseStr = function (s, k) {
  const len = s.length;
  const sArr = s.split('');
  console.log(sArr)
  // ['a', 'b', 'c', 'd']

  let i = 0;
  let res = '';

  while (i < len) {
    res += sArr.slice(i, i + k).reverse().join('');
    i += k;
    res += sArr.slice(i, i + k).join('')
    i += k
  }

  return res
};

console.log(reverseStr('abcd', 2))