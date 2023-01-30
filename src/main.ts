import { format_score, randInt } from './myLib';
import prompt_creator = require('prompt-sync');

const prompt:(s:string) => string = prompt_creator({sigint:true});

function guessLoop(trueVal: number, x = 0): number {
  const rawGuess = prompt("Guess an intger number between 0 and 100: ")
  const intGuess = Number.parseInt(rawGuess, 10);
  if (Number.isNaN(intGuess)) {
    console.log("Sorry. Not a number");
    return guessLoop(trueVal, x);
  } else if (intGuess < trueVal) {
    console.log("Sorry. "+intGuess+" is too low.");
    return guessLoop(trueVal, x + 1);
  } else if (intGuess > trueVal) {
    console.log("Sorry. "+intGuess+" is too high.");
    return guessLoop(trueVal, x + 1);
  } else {
    return x + 1;
  }
}

function playOnce() {
  const true_value = randInt(0, 100);
  const m = guessLoop(true_value, 0);
  console.log(format_score(m))
  console.log("It took " + m + " tries to complete.");
}

function askPlay() {
    const doPlayRaw: string = prompt("Wanna play? (y/n)")
    if (doPlayRaw === "y") {
        playOnce();
        askPlay();
    } else if (doPlayRaw === 'n') {
        console.log("Goodbye!");
        process.exit()
    } else {
        console.log("Not recognized.");
        askPlay();
    }
  }

askPlay();