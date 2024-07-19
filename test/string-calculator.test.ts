import { add } from "../src/string-calculator";

describe("StringCalculator", () => {
  test("should return 0 for an empty string", () => {
    expect(add("")).toBe(0);
  });

  test("should return the number itself when a single number is provided", () => {
    expect(add("1")).toBe(1);
  });

  test("should return the sum of two comma-separated numbers", () => {
    expect(add("1,2")).toBe(3);
  });

  test('should allow the add method to handle an unknown amount of numbers', () => {
    expect(add('1,2,3')).toBe(6);
  });  

  test("should allow the add method to handle new lines between numbers", () => {
    expect(add("1\n2,3")).toBe(6);
  });
});
