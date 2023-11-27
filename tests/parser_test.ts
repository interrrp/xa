import { assertEquals } from "std/assert/mod.ts";
import { parse } from "../src/parser.ts";
import { tokenize } from "../src/tokenizer.ts";

Deno.test("correctly parses valid input", () => {
  assertEquals(
    parse(tokenize("1+2")),
    {
      left: 1,
      operator: "plus",
      right: 2,
    },
  );
});

Deno.test("correctly parses valid input with decimals", () => {
  assertEquals(
    parse(tokenize("1.2+3.4")),
    {
      left: 1.2,
      operator: "plus",
      right: 3.4,
    },
  );
});
