
// 1108 - problem

// function defangIPaddress(address){
//   console.log(address.split(".").join("[.]"));
// }

// defangIPaddress("255.01.01.08");

// let text = "How are you doing today?";
// const myArray = text.split(" ", 1);

// console.log(myArray);

// let namesStr = "Josh, John, Steve";
// let namesArr = namesStr.split(",", 2);

let str = "Josh, John, Steve";
let arr =  str.split(','); // "Josh, John, Steve"
let result = arr.map(name => name+='jon').join(',')
console.log(result);