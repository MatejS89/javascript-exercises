const sumAll = function (num1, num2) {
  if (!Number.isInteger(num1) || !Number.isInteger(num2)) return "ERROR";
  if (num1 < 0 || num2 < 0) return "ERROR";
  let smaller = 0;
  let larger = 0;
  num1 <= num2
    ? ((smaller = num1), (larger = num2))
    : ((smaller = num2), (larger = num1));
  let toRet = 0;
  for (let i = smaller; i <= larger; i++) toRet += i;
  return toRet;
};

// Do not edit below this line
module.exports = sumAll;
