// Task 001 -------------------------------------------------------------------------

let arrays = [[1, 2, 3], [4, 5], [6]];

console.log(arrays.reduce((finalArray, index) => finalArray.concat(index), []));

// Task 002 -------------------------------------------------------------------------

const loop = (number, funcIf, funcUpdate, funcBody) => {
  for (let index = number; funcIf(index); index = funcUpdate(index)) {
    funcBody(index)    
  }
}

loop(3, n => n > 0, n => n - 1, console.log);

// Task 003 -------------------------------------------------------------------------

function every(array, predFunction) {
  const newArray = []
  for (const element of array) {
    if (predFunction(element)) {
      newArray.push(element)
    }
  }
  if (newArray.length === array.length) {
    return true
  } 
  return false
}