/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
  return editStr(s) === editStr(t)

  function editStr(str) {
    const arr = str.split("");

    while (arr.includes('#')) {
      const ind = arr.indexOf('#')
      ind > 0 ? arr.splice(ind - 1, 2) : arr.splice(ind, 1)
    }

    return arr.join('')
  }
};