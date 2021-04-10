function isValidNumber(input) {
  return !isNaN(Number(input)) || input === "-";
}

function stringCalculator(input) {
  let result = 0;
  if (input.length === 0) {
    return 0;
  } else if (input.length === 1) {
    return Number(input);
  }

  // Concatenate numbers here
  // Eg. input = 1,25,3
  // prev = 1
  // ...
  // prev = 2
  // prev = 25
  // ...
  // prev = 3
  let prev = null;
  for (let i = 0; i < input.length; i++) {
    let curr = input[i];

    if (prev !== null) {
      // Check if number is valid not a character or special character
      if (isValidNumber(curr)) {
        // Concat numbers
        prev += curr;
      } else {
        // If current value is other than number then add prev to result and make prev again null
        result += Number(prev);
        prev = null;
      }
    } else {
      if (isValidNumber(curr)) {
        prev = curr;
      }
    }

    // If last index then add it to result
    if (i === input.length - 1) {
      result += Number(prev);
    }

    if (result < 0) {
      throw new Error("negatives not allowed");
    }
  }

  return result;
}

module.exports = { stringCalculator };
