import { getRowsFromTextBlock, getSum } from '../1/shared';

const parseNumberString = (numberString: string): number[] =>
  numberString
    .trim()
    .split(' ')
    .filter((str) => !!str)
    .map((str) => parseInt(str.trim()));

export const getCardNumbers = (input: string): number[][] => {
  const winningNumbersStr = input.substring(
    input.indexOf(':') + 1,
    input.indexOf('|') - 1,
  );
  const numbersStr = input.substring(input.indexOf('|') + 1);

  return [parseNumberString(winningNumbersStr), parseNumberString(numbersStr)];
};

export const getCardPoints = (input: string): number => {
  const [winningNumbers, numbers] = getCardNumbers(input);
  const matchingNumbers = numbers.filter((num) => winningNumbers.includes(num));

  // Starting with 1 point, multiply by 2 for each matching number
  return matchingNumbers.reduce(
    (partialSum) => (partialSum === 0 ? 1 : partialSum * 2),
    0,
  );
};

export const solvePuzzleA = (input: string): number => {
  const rows = getRowsFromTextBlock(input);
  const rowResults = rows.map((row) => getCardPoints(row));
  return getSum(rowResults);
};
