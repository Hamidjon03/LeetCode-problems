let arrayString = function(word1, word2){
  return word1.join("") === word2.join("")
}


console.log(arrayString(["ab", "c"], ["a", "bc"]));