import { describe, expect, it } from 'vitest';
import {
  getNumberInfo,
  getSymbolIndices,
  numbersWithAdjacentSymbols,
  solvePuzzleA,
} from './shared';

const testData1 = `

467..114..
...*......
..35..633.
......#...
617*......
.....+.58.
..592.....
......755.
...$.*....
.664.598..

`;

describe('getSymbolIndices', () => {
  it('returns all indices of symbols', () => {
    expect(getSymbolIndices('...*......')).toStrictEqual([3]);
    expect(getSymbolIndices('617*......')).toStrictEqual([3]);
    expect(getSymbolIndices('.....+.58.')).toStrictEqual([5]);
    expect(getSymbolIndices('...$.*....')).toStrictEqual([3, 5]);
    expect(getSymbolIndices('.664.598..')).toStrictEqual([]);
  });
});

describe('getNumberInfo', () => {
  it('returns numbers and corresponding indices', () => {
    expect(getNumberInfo('467..114..')).toStrictEqual([
      [467, 0],
      [114, 5],
    ]);
    expect(getNumberInfo('..35..633.')).toStrictEqual([
      [35, 2],
      [633, 6],
    ]);
    expect(getNumberInfo('617*......')).toStrictEqual([[617, 0]]);
    expect(getNumberInfo('...$.*....')).toStrictEqual([]);
  });
});

describe('numbersWithAdjacentSymbols', () => {
  it('returns the numbers that have adjacent symbols', () => {
    expect(
      numbersWithAdjacentSymbols('...*......', '..35..633.', '......#...'),
    ).toStrictEqual([35, 633]);
  });
});

describe('solvePuzzleA', () => {
  it('does the thing...', () => {
    expect(solvePuzzleA(testData1)).toBe(4361);
  });
});
