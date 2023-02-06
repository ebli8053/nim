import { parse_move } from "./nim_lib";

test("Can parse a well formed move", () => {
  expect(parse_move("[0,3]")).toStrictEqual({ pile: 0, count: 3 });
});

test("Fails for missing comma", () => {
  expect(parse_move("[03]")).toBeUndefined();
});
test("Fails for missing bracket", () => {
  expect(parse_move("[0,3")).toBeUndefined();
});
test("Accepts spaces", () => {
  expect(parse_move("[ 0 , 3  ]")).toStrictEqual({ pile: 0, count: 3 });
});