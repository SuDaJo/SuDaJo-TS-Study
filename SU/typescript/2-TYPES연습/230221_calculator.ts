/**
 * Let's make a calculator 🧮
 */

// 1. 정수현 정답

type Calc = "add" | "substract" | "multiply" | "divide" | "remainder";

function calculate(option: Calc, num1: number, num2: number) {
  if (option === "add") {
    return num1 + num2;
  } else if (option === "substract") {
    return num1 - num2;
  } else if (option === "multiply") {
    return num1 * num2;
  } else if (option === "divide") {
    return num1 / num2;
  } else if (option === "remainder") {
    return num1 % num2;
  }
}

// console.log(calculate("add", 1, 3)); // 4
// console.log(calculate("substract", 3, 1)); // 2
// console.log(calculate("multiply", 4, 2)); // 8
// console.log(calculate("divide", 4, 2)); // 2
// console.log(calculate("remainder", 5, 2)); // 1

// 2. 엘리 정답

type Command = "add" | "substract" | "multiply" | "divide" | "remainder";

function calculate2(command: Command, a: number, b: number): number {
  switch (command) {
    case "add":
      return a + b;
    case "substract":
      return a - b;
    case "multiply":
      return a * b;
    case "divide":
      return a / b;
    case "remainder":
      return a % b;

    default:
      throw Error("unknown command");
  }
}

console.log(calculate2("add", 1, 3)); // 4
console.log(calculate2("substract", 3, 1)); // 2
console.log(calculate2("multiply", 4, 2)); // 8
console.log(calculate2("divide", 4, 2)); // 2
console.log(calculate2("remainder", 5, 2)); // 1
