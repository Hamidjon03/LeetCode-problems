function lengthOfLastWord(s){
  let trimmedWord = s.trim()
  let newString = trimmedWord.split(" ");
  let lastWord = newString.length - 1;
  let lastWordLength = newString[lastWord].length
  console.log(lastWordLength);
}

lengthOfLastWord("a ")