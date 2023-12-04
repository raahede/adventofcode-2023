export const getRowsFromTextBlock = (input: string): string[] => {
  return input
    .split('\n')
    .map((str) => str.trim())
    .filter((str) => !!str);
};

export const getNumbersFromString = (input: string): number[] => {
  return input.split('').flatMap((char) => {
    const parsed = parseInt(char);
    return !isNaN(parsed) ? [parsed] : [];
  });
};

export const getNumbersAndWordNumbersFromString = (input: string) => {
  const numberWords = [
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];

  // Match numbers and number words
  const regex = /(?=(one|two|three|four|five|six|seven|eight|nine|\d))/g;

  const matches = Array.from(input.matchAll(regex)).map((match) => {
    // Parse numbers
    if (!isNaN(parseInt(match[1]))) return parseInt(match[1]);
    // Replace words
    return numberWords.indexOf(match[1]) + 1;
  });

  return matches;
};

export const concatNumberFromFirstAndLastItem = (input: number[]): number => {
  if (!input.length) throw new Error('No items in array');

  return parseInt(
    [input[0].toString(), input[input.length - 1].toString()].join(''),
  );
};

export const getRowResultB = (input: string): number =>
  concatNumberFromFirstAndLastItem(getNumbersAndWordNumbersFromString(input));

export const getSum = (input: number[]): number => {
  return input.reduce((partialSum, a) => partialSum + a, 0);
};

export const solvePuzzleA = (input: string): number => {
  const rows = getRowsFromTextBlock(input);
  const rowResults = rows.flatMap((row) =>
    concatNumberFromFirstAndLastItem(getNumbersFromString(row)),
  );

  return getSum(rowResults);
};

export const solvePuzzleB = (input: string): number => {
  const rows = getRowsFromTextBlock(input);
  const rowResults = rows.map((row) => getRowResultB(row));

  return getSum(rowResults);
};
