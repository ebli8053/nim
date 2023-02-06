import { parse_move } from "./nim_lib";

test("Format a really bad score", () => {
  expect(parse_move("[0,3]")).toStrictEqual({ pile: 0, count: 3 });
});