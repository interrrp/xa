import { assertEquals } from "std/assert/mod.ts";
import { tokenize } from "../src/tokenizer.ts";

Deno.test("correctly tokenizes valid input", () => {
  assertEquals(tokenize("1+2"), [
    { type: "number", value: 1 },
    { type: "plus", value: "+" },
    { type: "number", value: 2 },
  ]);
  assertEquals(tokenize("1-2*4"), [
    { type: "number", value: 1 },
    { type: "minus", value: "-" },
    { type: "number", value: 2 },
    { type: "mul", value: "*" },
    { type: "number", value: 4 },
  ]);
  assertEquals(tokenize("1*2+4/6"), [
    { type: "number", value: 1 },
    { type: "mul", value: "*" },
    { type: "number", value: 2 },
    { type: "plus", value: "+" },
    { type: "number", value: 4 },
    { type: "div", value: "/" },
    { type: "number", value: 6 },
  ]);
});

Deno.test("correctly tokenizes decimals", () => {
  assertEquals(tokenize("1.2+3.4"), [
    { type: "number", value: 1.2 },
    { type: "plus", value: "+" },
    { type: "number", value: 3.4 },
  ]);
});
