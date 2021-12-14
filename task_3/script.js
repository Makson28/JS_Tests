'use srtict';

const Login1 = ["serg22", "tester_2", "Prokopenko", "guest"];
const Login2 = ["user1", "user2", "333", "user4", "aa"];

const longestLogin = (login) => {
  let temp;
  login.reduce(function (previousValue, currentValue) {
    if (previousValue) {
      temp = previousValue;
    }

    if (temp.length <= currentValue.length) {
      temp = currentValue;
    }
  });
  console.log(temp);
}

longestLogin(Login1);
longestLogin(Login2);