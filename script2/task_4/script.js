'use srtict';

function sumOfLen(...str) {
  let length = 0;
  str.forEach(element => {
    length += element.length
  });
  console.log(length);
}

sumOfLen('hello', 'hi', 'my name', 'is');