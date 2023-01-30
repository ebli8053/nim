import { format_score } from "./myLib";

test("Format a really bad score", () => {
  expect(format_score(100)).toBe("You found it... eventually.");
});

test("Format a great score", () => {
  // this test fails. Just to make sure we get some test failures.
  expect(format_score(1)).toBe("WOW. Hole in one!");
});