import { validate_move, parse_move, Move, GameState, Player } from "./nim_lib";
import * as PromptSync from "prompt-sync";

const prompt: PromptSync.Prompt = PromptSync({ sigint: true });

function read_move(): Move {
    console.log("How many stones do you want to pick? Format: [pile,stones]");
    const move_str: string = prompt("> ");
    const m = parse_move(move_str);
    if (m === undefined) {
        console.log(`Could not interpret ${move_str} as a move`);
        return read_move();
    }
    else {
        return m;
    }
}
/**
 * Check if  a certain game state is in a winning conditon
 * @param gs the game state to test
 * @returns true if all piles are empty
 */
function is_winning(gs: GameState): boolean {
    return gs.map((x: number) => x == 0).reduce((previous: boolean, current: boolean) => previous && current, true);
}

/**
 * Apply a move to a game state
 * @precondition move is valid
 * @param gs the game state before the move
 * @param m the move
 */
function play_move(gs: GameState, m: Move): GameState {
    const gs_after: GameState = [gs[0], gs[1], gs[2]];
    gs_after[m.pile] -= m.count;
    return gs_after;
}

/**
 * Produce a new starting board
 * @returns a fresh game state
 */
function make_game(): GameState {
    function random_number(): number {
    let random = Math.floor(Math.random()*20);
    if (undefined)
    return random
    }
    return [random_number(), random_number(), random_number()]
}

function show_game_state(gs: GameState): void {
    console.log("Pile 0 contains " + gs[0] + " stones");
    console.log("Pile 1 contains " + gs[1] + " stones");
    console.log("Pile 2 contains " + gs[2] + " stones");
}

function print_move(p: Player, m: Move): void {
    console.log(`${p} removes ${m.count} stones from pile ${m.pile}`);
}



function main(): void {
    console.log("Welcome to Nim");
    const gs = make_game();
    play(gs);
}

function play(gs: GameState): void {
    show_game_state(gs);
    gs = player_move(gs);
    if (is_winning(gs)) {
        console.log("Player win!");
        main();
    } else {
        gs = computer_move(gs);
        if (is_winning(gs)) {
            console.log("Computer won!");
            main();
        } else {
            play(gs);
        }
    }

}


function player_move(gs: GameState): GameState {
    console.log("Your move.");
    const m = read_move();
    print_move("Player", m);
    if (validate_move(gs, m)) {
        return play_move(gs, m);
    } else {
        console.log("Invalid move.");
        return player_move(gs);
    }
}

function computer_move(gs: GameState): GameState {
    const m = compute_computer_move(gs);
    print_move("Computer", m);
    return play_move(gs, m);
}
function compute_computer_move(gs: GameState): Move {
    const [a, b, c] = gs;
    return a > 0
        ? { pile: 0, count: a }
        : b > 0
            ? { pile: 1, count: b }
            : { pile: 2, count: c };
}

main();