const { verifyPass, easyPasses } = require("./verifyer");
const { expect, it, describe } = require("@jest/globals");

describe("VerifyPass", () => {
  it("No Rules, Passes", () => {
    const result = verifyPass("Any Input", []);
    expect(result).toBeTruthy();
  });

  it("More than 8 Characters, Fails", () => {
    const result = verifyPass("only", [(input) => input.length >= 8]);
    expect(result).toBeFalsy();
  });

  it("More than 8 Characters, Passes", () => {
    const result = verifyPass("more than 8 characters", [
      (input) => input.length >= 8,
    ]);
    expect(result).toBeTruthy();
  });

  it("Easy passwords, Fails", () => {
    const result = verifyPass("12345678", [
      (input) => input.length >= 8,
      (input) => !easyPasses.includes(input),
    ]);
    expect(result).toBeFalsy();
  });

  it("Strong Password, Fails", () => {
    const result = verifyPass(
      "12345678",
      [(input) => input.length >= 8, (input) => !easyPasses.includes(input)],
      true
    );
    expect(result).toBeFalsy();
  });

  it("Strong Password, Passes", () => {
    const result = verifyPass(
      "Shankar@123",
      [(input) => input.length >= 8, (input) => !easyPasses.includes(input)],
      true
    );
    expect(result).toBeTruthy();
  });

  it("Strong Password, no capital letters, Fails", () => {
    const result = verifyPass(
      "shankar@123",
      [(input) => input.length >= 8, (input) => !easyPasses.includes(input)],
      true
    );
    expect(result).toBeFalsy();
  });

  it("Strong Password, no small letters, Fails", () => {
    const result = verifyPass(
      "SHANKAR@123",
      [(input) => input.length >= 8, (input) => !easyPasses.includes(input)],
      true
    );
    expect(result).toBeFalsy();
  });

  it("Strong Password, no special characters, Fails", () => {
    const result = verifyPass(
      "Shankar123",
      [(input) => input.length >= 8, (input) => !easyPasses.includes(input)],
      true
    );
    expect(result).toBeFalsy();
  });
});
