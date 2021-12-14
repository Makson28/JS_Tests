'use srtict';

const arr = [12, 6, 22, 0, -8];

const getModifiedArray = (a) => {
  let newArr = [];
  a.forEach((element, index) => {
    if (index === 0) {
      newArr[index] = 'Start';
    } else if (index === a.length - 1) {
      newArr[index] = 'End';
    } else {
      newArr[index] = element;
    }
  });
  console.log(arr);
  console.log(newArr);
};

getModifiedArray(arr);