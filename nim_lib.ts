export type Move = {pile:number, count:number};
export type GameState = [number,number,number];
export type Player = string;

/**
 * parsing move by regular expression.
 * see e.g. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
 * @param s string to parse as move
 * @returns a move. returning undefined means a parse error
 */
export function parse_move(s:string): Move | undefined {
  const regex = /^\[\s*(\d+)\s*,\s*(\d+)\s*\]$/g;
  const result = regex.exec(s);
  if (result?.[0] === undefined || result?.[1] === undefined) { 
      return undefined;
  } else{
      const x: Move = {pile:parseInt(result?.[1]),count:parseInt(result?.[2])};
      return x;
  }
}

/**
 * check if one may play a proposed move on a certain game state
 * @param gs the current state of game
 * @param m the proposed move
 * @returns true if move is valid
 */
export function validate_move(gs: GameState, m: Move): boolean {
  const n = m.count;
  if (m.pile < gs.length && gs[m.pile] >= n && n > 0) {
      return true;
  } else {
      return false;
  }
}



