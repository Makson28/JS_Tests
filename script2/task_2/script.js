'use srtict';

const howMuchSec = (seconds = 0, minutes = 0, hours = 0, days = 0, weeks = 0, months = 0, years = 0) => {
  const counter = seconds + minutes * 60 + hours * 3600 + days * 86400 + weeks * 604800 + months * 18144000 * years * 217728000;

  console.log(counter);
};

howMuchSec(12, 3);
howMuchSec(1, 33, 22);
howMuchSec();