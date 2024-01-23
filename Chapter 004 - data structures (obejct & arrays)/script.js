// Task 001 ------------------------------------------------------------------

// const range = (start, end) => {
//   const array = []
//   for (start; start <= end; start++) {
//     array.push(start)
//   }
//   return array
// }

const sum = (array) => {
  let total = 0
  for (const element of array) {
    total += element
  }
  return total
}

// additional --------------

const range = (start, end, step) => {
  const array = []
  if (start < end) {
    for (start; start <= end; start += step) {
      array.push(start)
    }
  } else {
    for (start; start >= end; start += step) {
      array.push(start)
    }
  }
  return array
}

// Task 002 ------------------------------------------------------------------

const reverseArray = (array) => {
  const otherArray = []
  for (const element of array) {
    otherArray.unshift(element)
  }
  return otherArray
}

const reverseArrayInPlace = (array) => {
  array.push(array[0])
  for (let index = 0; index < array.length; index++) {
    array.unshift(array[index])
    array.splice(index, 1)
  }
  array.shift()
  return array
}

// Task 003 ------------------------------------------------------------------

const arrayToList = (array) => {
  let list = null
  for (const element of array) {
    list = {value: element, rest: list}
  }
  return list
}

const listToArray = (list) => {
  let array = []
  for (let node = list; node; node = node.rest) {
    array.push(node.value);
  }
  return array
}

const prepend = (value, list) => {
  return list = {value: value, rest:list}
}

const nth = (list, number) => {
  if (!list){ 
    return undefined;
  }
  else if (number == 0) {
    return list.value
  }
  else {
    return nth(list.rest, number - 1)
  }
}

// Task 004 ------------------------------------------------------------------

function deepEqual(a, b) {
  if (a === b) return true
  
  if (a == null || typeof a != "object" ||
      b == null || typeof b != "object") return false

  let keysA = Object.keys(a), keysB = Object.keys(b)

  if (keysA.length != keysB.length) return false

  for (let key of keysA) {
    if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false
  }

  return true
}
