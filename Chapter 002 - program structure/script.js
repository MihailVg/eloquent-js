// Task 001 -------------------------------------------------------

let triangle = '#'

for (let index = 0; index < 7; index++) {
  console.log(triangle)
  triangle = triangle + '#'
}

// Task 002 -------------------------------------------------------

for (let index = 0; index <= 100; index++) {
  if (index % 3 === 0 && index % 5 === 0) {
    console.log('FizzBuzz');
  } else if (index % 3 === 0) {
    console.log('Fizz');
  } else if (index % 5 === 0) {
    console.log('Buzz');
  } else {
    console.log(index);
  }
}

// Task 003 -------------------------------------------------------

let size = 8;

let chessRow = "";

for (let index = 0; index < size; index++) {
  for (let i = 0; i < size; i++) {
    if ((i + index) % 2 == 0) {
      chessRow += " ";
    } else {
      chessRow += "#";
    }
  }
  chessRow += "\n";
}

console.log(chessRow);