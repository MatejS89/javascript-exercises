const repeatString = function (string, num) {
  if (num < 0) return "ERROR";
  let toRet = "";
  for (let i = 0; i < num; i++) {
    toRet += string;
  }
  return toRet;
};

// Do not edit below this line
module.exports = repeatString;
