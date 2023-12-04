import { getRowsFromTextBlock, getSum } from '../1/shared';

// the bag contained only 12 red cubes, 13 green cubes, and 14 blue cubes
export const gameConfig = {
  red: 12,
  green: 13,
  blue: 14,
};

export type GameConfig = {
  green: number; // highest occurrence
  blue: number; // highest occurrence
  red: number; // highest occurrence
};

export const getGameId = (input: string): number => {
  const idStr = input.match(/(?<=Game \s*).*?(?=\s*:)/gs);
  if (!idStr) throw new Error('Could not find ID');
  return parseInt(idStr[0]);
};

export const gameIsPossible = (input: string, config: GameConfig): boolean => {
  let isPossible = true;
  input
    .substring(input.indexOf(':') + 1)
    .split(';')
    .every((part) =>
      // Using every() enables breaking the loop by returning falsy
      part.split(',').every((partItem) => {
        // '3 blue'
        // '4 red'
        // '2 green'
        const str = partItem.trim();
        const number = parseInt(str.substring(0, str.indexOf(' ')));
        const color = str.substring(str.indexOf(' ') + 1) as
          | 'blue'
          | 'red'
          | 'green';

        if (!Object.keys(config).includes(color))
          throw new Error(`Color "${color}" not found in config`);

        // Return falsy to break loop and set var
        return number > config[color] ? (isPossible = false) : true;
      }),
    );

  return isPossible;
};

export const solvePuzzleA = (input: string, config: GameConfig): number => {
  const rows = getRowsFromTextBlock(input);
  const rowResults = rows.flatMap((gameStr) => {
    return gameIsPossible(gameStr, config) ? getGameId(gameStr) : [];
  });

  return getSum(rowResults);
};
