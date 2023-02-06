import {validate_move, parse_move } from "./nim_lib";

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

test("Cannot pick from unknown pile",()=>
  expect(validate_move([10,20,30],{pile:10,count:1})).toBe(false)
)
test("Must pick more than zero",()=>
  expect(validate_move([1,1,1],{pile:1,count:0})).toBe(false)
)
test("Cant pick more than max",()=>
  expect(validate_move([1,1,1],{pile:1,count:2})).toBe(false)
)