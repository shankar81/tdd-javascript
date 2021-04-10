const { stringCalculator } = require("./stringCalculator");

describe("StringCalculator", () => {
  test("Empty String, Should return 0", () => {
    const result = stringCalculator("");
    expect(result).toBe(0);
  });

  test("Only one value, Passes", () => {
    const result = stringCalculator("1");
    expect(result).toBe(1);
  });

  test("Two value, Passes", () => {
    const result = stringCalculator("1,2");
    expect(result).toBe(3);
  });

  test("Multiple values, Passes", () => {
    const result = stringCalculator("1,2,8,7,9,6,4,5,10,55");
    expect(result).toBe(107);
  });

  test("With delimiters, Passes", () => {
    const result = stringCalculator("//;\n1;2");
    expect(result).toBe(3);
  });

  test("Multiple 1 delimiters, Passes", () => {
    const result = stringCalculator("//[***]\n1***2***3");
    expect(result).toBe(6);
  });

  test("Multiple 2 delimiters, Passes", () => {
    const result = stringCalculator("//[**][%%]\n1**2%%3");
    expect(result).toBe(6);
  });

  test("One negative number, Passes", () => {
    const result = () => stringCalculator("-1");
    expect(result).toThrow("negatives not allowed");
  });

  test("Two negative numbers, Passes", () => {
    const result = () => stringCalculator("-1,-34");
    expect(result).toThrow("negatives not allowed");
  });

  test("First positive other negative numbers, Passes", () => {
    const result = () => stringCalculator("5,-1,-34");
    expect(result).toThrow("negatives not allowed");
  });

  test("First positive other negative numbers, Passes", () => {
    const result = () => stringCalculator("5,-13,-34");
    expect(result).toThrow("negatives not allowed");
  });

  test("Last value is not a number, Passes", () => {
    const result = stringCalculator("5,8, 9, 7, 8***");
    expect(result).toBe(37);
  });
});
