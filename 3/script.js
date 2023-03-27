
// 242 - problem
function anagram(s, t) {
  return s.split("").sort().join("") === t.split("").sort().join("");
}

console.log(anagram("anagram", "nagaram"));

// split metodi   string   ni  array ga o'tkazib beradi
// sort  metodi   arrayni  alfabit bo'yicha tartiblash
// join  metodi   arrayni  ni string ga o'tkazib beradi