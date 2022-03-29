const fibonacci = function (num) {
  const seq = [1, 1];
  if (num < 0) return "OOPS";
  if (num < 3) return 1;
  for (let i = 0; i < num - 2; i++) {
    const nextNum = seq[0] + seq[1];
    seq.unshift(nextNum);
  }
  return seq[0];
};

// Do not edit below this line
module.exports = fibonacci;
