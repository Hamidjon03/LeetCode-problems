function fizzBuzz(n) {
  let result = [];

  for (let i = 1; i <= n; i++){
    if(i % 15 == 0){
     result.push('Fizz Buzz')
    } else if(i % 5 == 0){
      result.push("Buzz")
    } else if(i % 3 == 0){
      result.push("Fizz")
    } else {
      result.push("Error")
    }
  }



  console.log(result)
}

fizzBuzz(15)


// const fizzBuzz = (n) => {
//   let res = []

//   for (let i = 1; i <= n; i++) {
//     let string = ''
//     if (i % 3 === 0) string += 'Fizz'
//     if (i % 5 === 0) string += 'Buzz'

//     if (string === '') string += i
//     res.push(string)
//   }


//   return res
// };
