/**
 * Generates the FizzBuzz sequence up to n.
 *
 * The FizzBuzz sequence is a well-known programming exercise where the program
 * generates a sequence of numbers where multiples of 3 and 5 are replaced with
 * "Fizz" and "Buzz" respectively, and multiples of both are replaced with
 * "FizzBuzz".
 *
 * @param {number} n - The number up to which to generate the FizzBuzz sequence.
 * @returns {string[]} - An array of strings representing the FizzBuzz sequence.
 * @throws {Error} - If n is less than or equal to 0.
 */
export function fizzBuzz(n: number): string[] {
  const result: string[] = [];
  if (n <= 0) {
    throw new Error("n must be greater than 0");
  }
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result.push("FizzBuzz");
    } else if (i % 3 === 0) {
      result.push("Fizz");
    } else if (i % 5 === 0) {
      result.push("Buzz");
    } else {
      result.push(i.toString());
    }
  }
  return result;
}
