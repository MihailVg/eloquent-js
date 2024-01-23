// Task 001 -------------------------------------------------------

const findMin = (numberA, numberB) => {
  if (numberA === numberB) {
    return 'equal'
  } else if (numberA > numberB) {
    return `${numberA} is bigger`
  } else {
    return `${numberB} is bigger`
  }
}

const otherFindMin = (numberA, numberB) => numberA > numberB? numberA : numberB;

// Task 002 -------------------------------------------------------

const isEven = (numberA) => {
  if (numberA == 0) return true;
  else if (numberA == 1) return false;
  else if (numberA < 0) return isEven(-numberA);
  else return isEven(numberA - 2);
}

console.log(isEven(50));
console.log(isEven(75));

// Task 003 -------------------------------------------------------

const countBs = (someString) => {
  let counter = 0;
  if (typeof(someString) !== 'string') {
    return
  }
  for (let index = 0; index < someString.length; index++) {
    if (someString[index] === 'B') {
      counter++
    }
  }
  console.log(counter);
}

countBs('afbvBasdfsBBBBBB')

// -----------------------------

const countChar = (someString, someChar) => {
  let counter = 0;
  if (typeof(someString) !== 'string') {
    return
  }
  for (let index = 0; index < someString.length; index++) {
    if (someString[index] === someChar) {
      counter++
    }
  }
  console.log(counter);
}

countChar('AFJEnfaskjfnAJENJJVNDSdjfsdkjfnSJDVnfsjefs', 'j')