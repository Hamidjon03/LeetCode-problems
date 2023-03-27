// 367 - problems

let isPerfectSquare = function(num){
  for(let i = 1; i*i <= num; i++){
    if(i * i == num) return true
  }

  return false
};
console.log(
  isPerfectSquare(16));