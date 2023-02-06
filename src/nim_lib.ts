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



