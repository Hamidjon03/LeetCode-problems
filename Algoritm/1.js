// problem 1

function sum(a, b) {
  console.log(a + b)
}

// sum(4,4)


// problem 2

function compare(num1, num2, num3) {

  let result;
  if (num1 > num2) {
    if (num1 > num3) {
      result = num1
    } else {
      result = num3
    }
  } else {
    if (num2 > num3) {
      result = num2
    } else {
      result = num3
    }
  }

  console.log(result)
}

// compare(33,2,3)


// problem 3

function factorial(n) {
  let fact = 1;
  for (let i = 1; i <= n; i++) {
    fact = fact * i
  }
  console.log(fact)
}

factorial(5)