// Linear and Binary search


// Linear



/*
 Binary Search ishlashi uchun ro'yxat tartiblangan bo'lishi shart
*/  

function binarySearch(list, item){
  // console.log(list.length)
  let low = 0; // 0
  let high = list.length - 1; // 8
  
  while (low <= high){
    let mid = Math.round((low + high) / 2)
    console.log(`mid = ${mid}`)
    let guess = list[mid];
    if(item === guess) {
      console.log(item)
    }
    if(guess > item){
      high = mid - 1
    } else{
      low = mid + 1
    }
  }
  
}

let arr = [1, 3, 4, 6, 7, 8, 10, 12, 23];
binarySearch(arr, 6)