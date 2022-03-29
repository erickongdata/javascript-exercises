const removeFromArray = function (arr, ...arg) {
  return arr.filter((elem) => !arg.includes(elem));
};

// Do not edit below this line
module.exports = removeFromArray;
