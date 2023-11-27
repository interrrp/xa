import { Operator } from "./common_types.ts";
import { Token } from "./tokenizer.ts";

export type Expression = {
  left: Expression | number;
  operator: Operator;
  right: Expression | number;
};

export function parse(tokens: Token[]): Expression {
  if (tokens.length === 3) {
    return parseExpression(tokens);
  }

  console.log(tokens);

  const operatorIndex = tokens.findIndex((token) =>
    ["+", "-", "*", "/"].includes(token.type)
  );

  if (operatorIndex === -1) {
    throw new Error("Invalid expression");
  }

  // TODO: Handle *ti-operator expressions

  return {
    left: parse(tokens.slice(0, operatorIndex)),
    operator: tokens[operatorIndex].type as Operator,
    right: parse(tokens.slice(operatorIndex + 1)),
  };
}

function parseExpression(tokens: Token[]): Expression {
  if (
    tokens[0].type !== "number" ||
    !["+", "-", "*", "/"].includes(tokens[1].type) ||
    tokens[2].type !== "number"
  ) {
    throw new Error("Invalid expression");
  }

  return {
    left: tokens[0].value as number,
    operator: tokens[1].type as Operator,
    right: tokens[2].value as number,
  };
}
