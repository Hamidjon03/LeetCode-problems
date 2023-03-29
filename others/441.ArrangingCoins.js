var arrangeCoins = function (n) {
  let counter = 0;
  let i = 1;

  while (n >= i) {
    n -= i;
    counter++;
    i++;
  }

  return counter
};