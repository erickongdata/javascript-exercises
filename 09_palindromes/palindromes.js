const palindromes = function (str) {
  const strFiltered = str.toLowerCase().replace(/[^a-z]/g, "");
  const strReverse = strFiltered.split("").reverse().join("");
  return strFiltered === strReverse;
};

// palindromes("ZZZZ car, a man, a maracaz.");

// Do not edit below this line
module.exports = palindromes;
