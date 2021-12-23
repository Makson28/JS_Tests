'use srtict';

const checkAdult = (age = 0) => {

  if (age === 0) {
    console.log("\nPlease, enter your age");
  } else if (typeof (age) !== "number") {
    console.log("\nPlease, enter number");
  } else if (age < 0) {
    console.log("\nPlease, enter positive number");
  } else if (!Number.isInteger(age)) {
    console.log("\nPlease, enter Integer number");
  } else if (age > 0 && age < 18) {
    console.log("\nAccess denied - you are too young!");
  } else if (age > 18) {
    console.log('\nAccess allowed');
  }
  console.log('Age verification complete\n');

}
checkAdult();
checkAdult(-5);
checkAdult(5);
checkAdult(2.5);
checkAdult('five');
checkAdult(25);