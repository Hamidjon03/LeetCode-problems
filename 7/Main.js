// 1816 - problem

let truncateSentences = function(s, k){
  let word = s.split(" ").splice(0, k).join(" ")
  console.log(word);
}

truncateSentences("Hello how are you John", 4)