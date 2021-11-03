// task one
const stringLength = (string) => {
  const chars = string.length;

  if (chars > 0 && chars <= 10) {
    return chars;
  }
  throw new Error('Error: Invalid string');
};

module.exports = stringLength;