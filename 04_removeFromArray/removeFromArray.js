const removeFromArray = function (arr) {
  const args = Array.from(arguments).slice(1);
  return arr.filter((curr) => !args.includes(curr));
};

// Do not edit below this line
module.exports = removeFromArray;
