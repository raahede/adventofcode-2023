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

export const getFullMap = (map: number[][]): number[][] => {
  return map
    .map((mapRow) => {
      const destination: number[] = [];
      const source: number[] = [];
      for (let index = 0; index < mapRow[2]; index++) {
        destination.push(mapRow[0] + index);
        source.push(mapRow[1] + index);
      }
      return [destination, source];
    })
    .reduce(
      (a, b) => [
        [...a[0], ...b[0]],
        [...a[1], ...b[1]],
      ],
      [[], []],
    );
};

export const getMapResults = (input: number[], map: number[][]): number[] => {
  const [destination, source] = getFullMap(map);
  return input.map((number) => {
    const sourceIndex = source.indexOf(number);
    return sourceIndex !== -1 ? destination[sourceIndex] : number;
  });
};

export const solvePuzzleA = (input: string): number => {
  const { seeds, maps } = getData(input);
  const result = maps.reduce(
    (prevOutput, map) => getMapResults(prevOutput, map),
    seeds,
  );
  return Math.min(...result);
};
