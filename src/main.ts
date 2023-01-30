import {format_score, rand_int} from "./myLib";
import prompt_creator = require("prompt-sync");

const prompt: (s: string) => string = prompt_creator({sigint:true});

function guess_loop(true_number: number, guesses_made = 0): number {
    const guess_string = prompt("Guess an intger number between 0 and 100: ");
    const guess_int = Number.parseInt(guess_string, 10);
    if (Number.isNaN(guess_int)) {
        console.log("Sorry. Not a number");
        return guess_loop(true_number, guesses_made);
    } else if (guess_int < true_number) {
        console.log("Sorry. " + guess_int + " is too low.");
        return guess_loop(true_number, guesses_made + 1);
    } else if (guess_int > true_number) {
        console.log("Sorry. " + guess_int + " is too high.");
        return guess_loop(true_number, guesses_made + 1);
    } else {
        return guesses_made + 1;
    }
}

function play_once(): void {
    const true_value = rand_int(0, 100);
    const m = guess_loop(true_value, 0);
    console.log(format_score(m));
    console.log("It took " + m + " tries to complete.");
}

function ask_play(): void {
    const do_play: string = prompt("Wanna play? (y/n)");
    if (do_play === "y") {
        play_once();
        ask_play();
    } else if (do_play === "n") {
        console.log("Goodbye!");
        process.exit();
    } else {
        console.log("Not recognized.");
        ask_play();
    }
}

ask_play();