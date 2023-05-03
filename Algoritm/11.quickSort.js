// QUICKSORT

function qsort(arr){
  if(arr.length < 2){
    return arr
  } else{
    let kichik = [];
    let katta = [];
    let ranNum = Math.floor(Math.random() * arr.length)
    let pivot = arr.splice(ranNum, 1 );
    console.log(`pivot: ${pivot}`)
    for(let item of arr){
      if(item <= pivot){
        kichik.push(item)
      } else {
        katta.push(item)
      }
    }
    console.log(qsort(kichik))
    console.log(qsort(katta))
    console.log(pivot)
    
    // console.log(qsort(kichik) + pivot + qsort(katta))

  }
}
qsort([4, 34, 23, 11, 5, 9, 2,8]);

