const fibonacci = function (targetNum) {
  if (targetNum <= 0) return "OOPS";
  const targetIndex = targetNum - 1;
  let sequence = [1, 1];
  for (let i = 1; i < targetIndex; i++) {
    sequence[i + 1] = sequence[i] + sequence[i - 1];
  }
  return sequence[targetIndex];
};

// Do not edit below this line
module.exports = fibonacci;
