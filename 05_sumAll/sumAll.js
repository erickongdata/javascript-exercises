const sumAll = function (num1, num2) {
  if (typeof num1 !== "number" || typeof num2 !== "number") return "ERROR";
  if (num1 < 0 || num2 < 0) return "ERROR";
  let low = Math.min(...arguments);
  let high = Math.max(...arguments);
  let total = 0;
  for (let i = low; i <= high; i++) {
    total += i;
  }
  return total;
};

// Do not edit below this line
module.exports = sumAll;
