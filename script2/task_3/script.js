'use srtict';

function max_difference(...arr) {
  let max = 0;
  let temp;
  
  for (let i = 0; i < arr.length - 1; i++) {
    temp = Math.abs(arr[i] - arr[i + 1]);
    max = Math.max(max, temp);
  }
  return max;
}

console.log(max_difference(3, 5, 2, 7));
console.log(max_difference(3, 5, 2, 7, 11, 0, -2));
console.log(max_difference(3, 5));
console.log(max_difference(3));