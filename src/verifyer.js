const easyPasses = ["12345678", "87654321", "abc@123"];
const specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];

function verifyPass(input, rules, strong = false) {
  if (rules.length === 0) {
    return true;
  }

  let result = true;
  rules.map((rule) => {
    if (!rule(input)) {
      result = false;
    }
  });

  // If need to verify if password is STRONG
  if (strong) {
    let isStrong = false;
    let atleastOneCapital = false;
    let atleastOneSmall = false;
    input.split("").map((character) => {
      if (specialCharacters.find((el) => el === character)) {
        // Check if special character is present
        isStrong = true;
      } else if (isNaN(parseInt(character))) {
        // First check is not a number
        if (character === character.toLowerCase() && !atleastOneSmall) {
          atleastOneSmall = true;
        }

        if (character === character.toUpperCase() && !atleastOneCapital) {
          atleastOneCapital = true;
        }
      }
    });

    return result && isStrong && atleastOneCapital && atleastOneSmall;
  }

  return result;
}

module.exports = {
  verifyPass,
  easyPasses,
};
