// 771 - problems

let jewelsIsInStones = function(jewels, stones){
  let jewelsArr = jewels.split("");
  let stonesArr = stones.split("");
  let numOfJewels = 0

  jewelsArr.forEach((jewel) => {
    for (let i=0; i < stonesArr.length; i++){
      if(stonesArr[i] == jewel){
        numOfJewels++;
      }
    }
  })

  return numOfJewels;
}