function isValidNumber(input) {
  return !isNaN(Number(input)) || input === "-";
}

function stringCalculator(input) {
  let result = 0;
  let negatives = [];
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
        // If contacatnetad prev is greater than 1000 then it should be ignored
        if (Number(prev) <= 1000) {
          result += Number(prev);
        }

        // Adding negatives to the array
        if (prev < 0) {
          negatives.push(prev);
        }
        prev = null;
      }
    } else {
      if (isValidNumber(curr)) {
        prev = curr;
      }
    }

    // If last index then add it to result
    if (i === input.length - 1) {
      // Adding negatives to the array
      if (prev < 0) {
        negatives.push(prev);
      }
      result += Number(prev);
    }
  }

  if (negatives.length === 1) {
    throw new Error("negatives not allowed");
  } else if (negatives.length > 1) {
    throw new Error(`negatives not allowed: ${negatives.join(", ")}`);
  }

  return result;
}

module.exports = { stringCalculator };
