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
  const randomFuckerNumberWords = [
    'oneight',
    'twone',
    'threeight',
    'fiveight',
    'sevenine',
    'eightwo',
    'eighthree',
    'nineight',
  ];

  const randomFuckerNumbers = [18, 21, 38, 58, 79, 82, 83, 98];

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

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const randomFuckerWordsIndexes = randomFuckerNumberWords.map((str, index) =>
    input.indexOf(str) !== -1
      ? [randomFuckerNumbers[index], input.indexOf(str)]
      : [],
  );

  const normalWordIndexes = numbers.map((num) => {
    const strIndex = input.indexOf(num.toString());
    return strIndex !== -1 ? [num, strIndex] : [];
  });

  const numberIndexes = numberWords.map((str, index) =>
    input.indexOf(str) !== -1 ? [numbers[index], input.indexOf(str)] : [],
  );

  const result = normalWordIndexes
    .concat(numberIndexes)
    .concat(randomFuckerWordsIndexes)
    .filter((item) => item.length)
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    .sort((a, b) => a[1] - b[1])
    .flatMap((item) => item[0]);

  const deleteIndexes: number[] = [];

  randomFuckerNumbers.forEach((mfNum) => {
    const i = result.indexOf(mfNum);

    if (i !== -1) {
      deleteIndexes.push(i - 1);
      deleteIndexes.push(i + 1);
    }
  });

  return result.filter((_, index) => !deleteIndexes.includes(index));
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

// First attempt too high: 54228
// Second attempt 75106 -- must also be too high
export const solvePuzzleB = (input: string): number => {
  const rows = getRowsFromTextBlock(input);
  const rowResults = rows.map((row) => getRowResultB(row));

  return getSum(rowResults);
};
