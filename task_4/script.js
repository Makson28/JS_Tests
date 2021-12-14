'use srtict';

const arr = [1, 2, 3, 4, 5];

function factorial(n) {
  return (n != 1) ? n * factorial(n - 1) : 1;
}

const processArray = (arr, factorial) => {
  const newArr = [];
  arr.forEach((element, index) => {
    newArr[index] = factorial(element);
  });

  console.log(newArr);
};

processArray(arr, factorial);