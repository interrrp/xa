import { Expression } from "../parser.ts";

export function generateRPS(expression: Expression): string {
  let result = "";

  if (typeof expression.left === "object") {
    result += generateRPS(expression.left);
  } else {
    result += expression.left;
  }
  result += " ";

  if (typeof expression.right === "object") {
    result += generateRPS(expression.right);
  } else {
    result += expression.right;
  }
  result += " ";

  result += expression.operator;

  return result;
}
