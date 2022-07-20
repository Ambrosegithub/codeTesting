const reverseString = (revstr) => {
  let newString = '';
  for (let i = revstr.length - 1; i >= 0; i -= 1) {
    newString += revstr[i];
  }
  return newString;
};

module.exports = reverseString;