const palindromes = function (word) {
  let processed = word.toLowerCase().replace(/[^0-9a-z]/g, "");
  return processed.split("").reverse().join("") === processed;
};

// Do not edit below this line
module.exports = palindromes;
