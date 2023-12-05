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

export const getCardId = (input: string): number => {
  const idStr = input.match(/(?<=Card \s*).*?(?=\s*:)/gs);
  if (!idStr) throw new Error('Could not find ID');
  return parseInt(idStr[0]);
};

export const getCardInfo = (input: string): number[] => {
  const id = getCardId(input);
  const [winningNumbers, numbers] = getCardNumbers(input);
  const matchingNumbers = numbers.filter((num) => winningNumbers.includes(num));
  // Starting with 1 point, multiply by 2 for each matching number
  const points = matchingNumbers.reduce(
    (partialSum) => (partialSum === 0 ? 1 : partialSum * 2),
    0,
  );
  return [id, points];
};

export const solvePuzzleA = (input: string): number => {
  const rows = getRowsFromTextBlock(input);
  const rowResults = rows.map((row) => getCardInfo(row)[1]);
  return getSum(rowResults);
};
