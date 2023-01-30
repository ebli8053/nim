function format_score(x: number): string {
  return x == 1
    ? "WOW! Hole in one!"
    : x < 3
      ? "well done"
      : x < 5
        ? "Good job."
        : x < 10
          ? "You made it!"
          : "You found it... eventually.";
}

function rand_int(min: number, max: number): number {
  return Math.floor(
    Math.random() * (max - min) + min
  );
}

export { rand_int, format_score };