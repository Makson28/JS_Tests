'use srtict';

const arr1 = [12, "User01", 22, true, -8];
const arr2 = ["Index", 6, null, 15];

const combineArray = (a1, a2) => {
  let newArr = [];
  let i = 0;

  a1.forEach((element) => {
    if (typeof(element) === 'number') {
      newArr[i] = element;
      i++;
    }
  });

  a2.forEach((element) => {
    if (typeof(element) === 'number') {
      newArr[i] = element;
      i++;
    }
  });
  
  console.log(arr1);
  console.log(arr2);
  console.log(newArr);
};

combineArray(arr1, arr2);