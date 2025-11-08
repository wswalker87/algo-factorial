function factorial(num) {
  // define the array
  // let numArray = []
  // count = 1
  // while (count <= num) {
  //   numArray.push(count)
  //   count += 1
  // }  
  // numArray.reverse()
  // // console.log(numArray)
  // for (num of numArray) {
  //   let prod = 0                            // 0
  //   prod += numArray[0] * numArray[1]       //numArray is [ 4,3,2,1] // 12 // numArray is [2,1] // 24 numArray is []    
  //   // prod += numArray[0] * numArray[1]
  //   numArray.splice(0, 2)
  //   console.log(prod)
  //   console.log(`The new numArray is ${numArray}`)
  // }
  if (num < 0) {
    return "Not postive number" // factorial has to be positive
  } else if (num === 0 || num === 1) { // if it is  0 or 1 it is 1
    return 1
  } else {
    let answer = 1 // start at 1
    for (let i = 2; i <= num; i++) { // 2 is less/= than 4, so i becomes 3 //3 is less/= than 4, i becomes 4 // 4 is = 4
      answer *= i // 1 * 3 = 3 // 3 * 2 = 6// 6 * 4 = 24 
    }
    return answer
  } 
// multiply the index with index plus 1, set that to the new prod, pop the value from the array. 
  // 4 would be 4*3=12 12*2=24 24*1=24
  // let i = num
  // let answer = 0
  // while (i > 0) {   // 4 is greate than 0
  //   prod = (i * (i - 1)) // prod is (4 * (4 - 1)) so (4 * 3) is 12 // second loop is then (3 * 2) which is six
  //   i -= 1 // subtract 1 from i (4 - 1 = 3)
    
  //   answer += prod
    
  //   console.log(`The prod is ${prod}`)
  //   console.log(`The num is ${num}`)
  //   console.log(`The answer is ${answer}`)
  // }
  // for (num in numArray) {
  //   let prod = numArray[0] * numArray[1]
  //   numArray.shift(0)
  //   console.log(prod)
  //   console.log(numArray)
  // }
  
  // return 0;
}
// console.log(factorial(15))
module.exports = factorial;
