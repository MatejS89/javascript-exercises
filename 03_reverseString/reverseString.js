const reverseString = function (src) {
  let toRet = "";
  for (let i = src.length - 1; i >= 0; i--) {
    toRet += src[i];
  }
  return toRet;
};

// Do not edit below this line
module.exports = reverseString;
