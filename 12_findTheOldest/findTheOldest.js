const findTheOldest = function (people) {
  return people.sort((left, right) =>
    left.yearOfDeath - left.yearOfBirth > right.yearOfDeath - right.yearOfBirth
      ? -1
      : 1
  )[0];
};

// Do not edit below this line
module.exports = findTheOldest;
