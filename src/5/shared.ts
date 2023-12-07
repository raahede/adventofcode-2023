export const getMaps = (input: string): number[][][] =>
  input
    .match(/(?<=map:\n\s*).*?(?=\s*\n\n)/gs)!
    .map((str) =>
      str
        .split('\n')
        .map((substr) => substr.split(' ').map((num) => parseInt(num))),
    );

export const getData = (input: string) => {
  const seeds = input
    .match(/(?<=seeds: \s*).*?(?=\s*\n\n)/gs)![0]
    .split(' ')
    .map((num) => parseInt(num));
  const maps = getMaps(input.substring(input.indexOf('\n\n')));
  return {
    seeds,
    maps,
  };
};

export const getMapResults = (input: number[], map: number[][]): number[] => {
  return input.map((number) => {
    let replacement = number;
    for (let index = 0; index < map.length; index++) {
      const mapRow = map[index];
      const [destination, source, multiplier] = mapRow;
      if (number >= source && number <= source + multiplier) {
        const diff = number - source;
        replacement = destination + diff;
        break;
      }
    }
    return replacement;
  });
};

// Answer too low 107591709
export const solvePuzzleA = (input: string): number => {
  const { seeds, maps } = getData(input);
  const result = maps.reduce(
    (prevOutput, map) => getMapResults(prevOutput, map),
    seeds,
  );
  return Math.min(...result);
};
