const concat = (firstArray, secondArray) => {
  let combinedArrays = [];
  for (const index of firstArray) {
    combinedArrays.push(index);
  }
  for (const binex of secondArray) {
    combinedArrays.push(binex);
  }
  return combinedArrays;
}

console.log(concat([ 1, 2, 3 ], [ 4, 5, 6 ]), "=?", [ 1, 2, 3, 4, 5, 6 ]);
console.log(concat([ 0, 3, 1 ], [ 9, 7, 2 ]), "=?", [ 0, 3, 1, 9, 7, 2 ]);
console.log(concat([], [ 9, 7, 2 ]), "=?", [ 9, 7, 2 ]);
console.log(concat([ 5, 10 ], []), "=?", [ 5, 10 ]);