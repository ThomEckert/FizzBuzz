import { fizzBuzz } from "../src/fizzbuzz";

describe("FizzBuzz Function", () => {
  it("Should return correct output for 1 to 20", () => {
    const results = fizzBuzz(20);
    expect(results).toEqual([
      "1",
      "2",
      "Fizz",
      "4",
      "Buzz",
      "Fizz",
      "7",
      "8",
      "Fizz",
      "Buzz",
      "11",
      "Fizz",
      "13",
      "14",
      "FizzBuzz",
      "16",
      "17",
      "Fizz",
      "19",
      "Buzz",
    ]);
  });
  it("Test parameters less than or equal to 0", () => {
    expect(() => fizzBuzz(0)).toThrow("Please enter a number greater than 0");
    expect(() => fizzBuzz(-1)).toThrow("Please enter a number greater than 0");
  });
});
