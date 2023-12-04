export type Game = {
  id: number;
  green: number; // highest occurrence
  blue: number; // highest occurrence
  red: number; // highest occurrence
};

export const mapGameData = (input: string): Game => {
  const idStr = input.match(/(?<=Game \s*).*?(?=\s*:)/gs);
  if (!idStr) throw new Error('Could not find ID');
  const id = parseInt(idStr[0]);

  let green = 0;
  let blue = 0;
  let red = 0;

  input
    .substring(input.indexOf(':') + 1)
    .split(';')
    .forEach((part) =>
      part.split(',').map((partItem) => {
        // '3 blue'
        // '4 red'
        // '2 green'
        const str = partItem.trim();
        const number = parseInt(str.substring(0, str.indexOf(' ')));
        const color = str.substring(str.indexOf(' ') + 1);

        switch (color) {
          case 'green':
            green = green < number ? number : green;
            break;

          case 'blue':
            blue = blue < number ? number : blue;
            break;

          case 'red':
            red = red < number ? number : red;
            break;

          default:
            throw new Error('Color not found');
        }
      }),
    );

  return {
    id,
    green,
    blue,
    red,
  };
};

export const solvePuzzleA = (input: string): number => {
  return 0;
};
