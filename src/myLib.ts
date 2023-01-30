

function foo(x:number) {
  return x+1;
}

function randInt(min: number, max: number) {
  return Math.floor(
    Math.random() * (max - min) + min
  )
}

export { randInt, foo };