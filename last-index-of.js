const lastIndexOf = (array, digit) => {
  let valueIndex = -1;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === digit) {
      valueIndex = i;
    }
  }
  return valueIndex;
}

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);

// define placeholder value as -1
// loop through the array
// every time the digit appears,
// update the placeholder value to the index
// of that digit