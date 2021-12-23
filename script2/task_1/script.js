'use srtict';

const arr1 = [-1, 2, 4, 0, 55, -12, 3];
const arr2 = [-2, 2, 3, 0, 43, -13, 6];

const filterNums = (arr, num = 0, parameter = 'greater') => {
  const newArr = [];
  let i = 0;

  if (parameter === 'greater') {
    arr.forEach(element => {
      if (element > num) {
        newArr[i] = element;
        i++;
      }
    });
  } else if (parameter === 'less') {
    arr.forEach(element => {
      if (element < num) {
        newArr[i] = element;
        i++;
      }
    });
  }
  
  console.log(newArr);
};

filterNums(arr1, 11, 'greater');
filterNums(arr2, 6, 'less');
filterNums(arr2, -33, 'less');
filterNums(arr2);
filterNums(arr2, 23);