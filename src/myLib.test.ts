import { foo } from "./myLib";

test("1+1=2", () => {
  expect(foo(1)).toBe(2);
});
