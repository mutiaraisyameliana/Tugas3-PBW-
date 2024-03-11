// Define operations as functions
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => b === 0 ? "Error: Division by zero" : a / b;
const remainder = (a, b) => b === 0 ? "Error: Division by zero" : a % b;

// Function to handle calculations with spread operator
const calculate = (operator, ...numbers) => {
  // Reduce the array of numbers using the chosen operator function
  const result = numbers.reduce(operator);
  return result;
};

// Example usage
const sum = calculate(add, 5, 3, 2);
const difference = calculate(subtract, 10, 4);
const product = calculate(multiply, 3, 4);
const quotient = calculate(divide, 15, 3);
const modulo = calculate(remainder, 10, 3);

console.log("Sum:", sum);
console.log("Difference:", difference);
console.log("Product:", product);
console.log("Quotient:", quotient);
console.log("Modulo:", modulo);
