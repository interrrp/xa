type Token = {
  type: "number" | "plus" | "minus" | "mul" | "div";
  value: string | number;
};

export function tokenize(input: string): Token[] {
  const tokens: Token[] = [];
  for (let cursor = 0; cursor < input.length; cursor++) {
    const character = input[cursor];
    switch (true) {
      case /\d/.test(character): {
        let number = character;
        while (/\d|\./.test(input[cursor + 1])) {
          number += input[++cursor];
        }
        tokens.push({ type: "number", value: parseFloat(number) });
        break;
      }

      case character === "+":
        tokens.push({ type: "plus", value: "+" });
        break;
      case character === "-":
        tokens.push({ type: "minus", value: "-" });
        break;
      case character === "*":
        tokens.push({ type: "mul", value: "*" });
        break;
      case character === "/":
        tokens.push({ type: "div", value: "/" });
        break;
    }
  }
  return tokens;
}
