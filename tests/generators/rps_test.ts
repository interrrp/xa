import { assertEquals } from "std/assert/mod.ts";
import { generateRPS } from "../../src/generators/rps.ts";

Deno.test("correctly generates valid input", () => {
  assertEquals(
    generateRPS({
      left: 1,
      operator: "+",
      right: 2,
    }),
    "1 2 +",
  );
});
