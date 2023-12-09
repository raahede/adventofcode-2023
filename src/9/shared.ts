import { getSum } from '../1/shared';
import { getNumberRowsFromTextBlock } from '../utils';

const getDiffs = (input: number[]): number[] => {
  return input.flatMap((num, i) =>
    // Subtract preceding number from next to get diff
    typeof input[i + 1] !== 'undefined' ? input[i + 1] - num : [],
  );
};

const allNumbersAreZero = (input: number[]): boolean => {
  // In case only on item in arr
  if (input.length === 1) return input[0] === 0;
  // Use sum of positive numbers (convert negative to positive)
  return input.reduce((a, b) => Math.abs(a) + Math.abs(b)) === 0;
};

export const extrapolateNextNumberInRow = (input: number[]): number => {
  const diffs: number[][] = [input];
  if (!input.length) throw new Error('Row is empty!');

  while (!allNumbersAreZero(diffs[diffs.length - 1])) {
    const lastDiff = diffs[diffs.length - 1];
    // In case only one number in the last extrapolated array, break loop
    if (lastDiff.length === 1) {
      diffs.push(lastDiff);
      break;
    }
    const diff = getDiffs(lastDiff);
    diffs.push(diff);
  }

  const sums: number[] = [0];

  // Work backwards up through extrapolated arrays to find predicted next values
  diffs.reverse().forEach((_prev, i) => {
    const prevSum = sums[sums.length - 1] || 0;
    const next = diffs[i + 1];
    if (next) {
      const lastOfNext = next[next.length - 1];
      const nextValExtrapolated = prevSum + lastOfNext;
      sums.push(nextValExtrapolated);
    }
  });

  return sums[sums.length - 1];
};

// Too high 1864197641
// Too high 1863727027
// Just right 1842168671
export const solvePuzzleA = (input: string): number => {
  const rows = getNumberRowsFromTextBlock(input);
  const rowResults = rows.map((row) => extrapolateNextNumberInRow(row));
  return getSum(rowResults);
};
