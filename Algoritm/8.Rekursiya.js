// Rekursiya


// n faktorialni hisoblash uchun funksiya
function sana(n){
  let sum = 1;
  for(let i = 1; i <= n; i++){
    sum *= i;
  }
  return sum
}

console.log(sana(5))