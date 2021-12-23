'use srtict';

let students = [{
  name: 'Anna',
  languages: ['English', 'Ukrainian'],
  age: 21
}, {
  name: 'Bob',
  languages: ['Polish', 'Spanish'],
  age: 26
}, {
  name: 'Alice',
  languages: ['Italian', 'Russian'],
  age: 18
}]

const getLanguages = (students, func) => {
  return students.reduce((acc, currentStudent) => {
    if (func === undefined) {
      return [...acc, ...currentStudent.languages];
    }
    return func(currentStudent) ? [...acc, ...currentStudent.languages] : acc;
  }, []);
};

console.log(getLanguages(students, student => student.age < 26));
console.log(getLanguages(students, student => student.name === 'Alice'));
console.log(getLanguages(students));