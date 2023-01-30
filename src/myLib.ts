

function format_score(x: number) {
  return  x == 1
              ? "WOW! Hole in one!"
          : x < 3
              ? "well done"
          : x < 5
              ? "Good job."
          : x < 10
              ? "You made it!"
              : "You found it... eventually.";
}

function randInt(min: number, max: number) {
  return Math.floor(
    Math.random() * (max - min) + min
  )
}

export { randInt, format_score };