import { sum3 } from "./sum";

test("adds 1 + 2 + 3 to equal 6", () => {
  expect(sum3(1, 2, 3)).toBe(6);
});
