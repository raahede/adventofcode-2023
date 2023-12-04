import { describe, expect, it } from 'vitest';
import {
  concatNumberFromFirstAndLastItem,
  getNumbersFromString,
  getRowResultB,
  getRowsFromTextBlock,
  getSum,
  solvePuzzleA,
  solvePuzzleB,
} from './shared';

const testData1 = `

1abc2
pqr3stu8vwx
a1b2c3d4e5f
treb7uchet

`;

const testData2 = `

two1nine
eightwothree
abcone2threexyz
xtwone3four
4nineeightseven2
zoneight234
7pqrstsixteen

`;

describe('getRowsFromTextBlock', () => {
  it('returns cleaned rows from text block', () => {
    expect(getRowsFromTextBlock(testData1)).toStrictEqual([
      '1abc2',
      'pqr3stu8vwx',
      'a1b2c3d4e5f',
      'treb7uchet',
    ]);
  });
});

describe('getNumbersFromString', () => {
  it('returns all numbers from string', () => {
    expect(getNumbersFromString('1abc2')).toStrictEqual([1, 2]);
    expect(getNumbersFromString('pqr3stu8vwx')).toStrictEqual([3, 8]);
    expect(getNumbersFromString('a1b2c3d4e5f')).toStrictEqual([1, 2, 3, 4, 5]);
    expect(getNumbersFromString('treb7uchet')).toStrictEqual([7]);
  });
});

describe('concatNumberFromFirstAndLastItem', () => {
  it('concats only first and last item', () => {
    expect(concatNumberFromFirstAndLastItem([3, 8])).toBe(38);
    expect(concatNumberFromFirstAndLastItem([1, 2, 3, 4, 5])).toBe(15);
  });

  it('if only one item, return it as first and second', () => {
    expect(concatNumberFromFirstAndLastItem([7])).toBe(77);
  });
});

describe('getSum', () => {
  it('calculates sum of numbers', () => {
    expect(getSum([12, 38, 15, 77])).toBe(142);
    expect(getSum([29, 83, 13, 24, 42, 14, 76])).toBe(281);
  });
});

describe('getRowResultB', () => {
  it('gets concatenated number from string', () => {
    expect(getRowResultB('two1nine')).toBe(29);
    expect(getRowResultB('eightwothree')).toBe(83);
    expect(getRowResultB('abcone2threexyz')).toBe(13);
    expect(getRowResultB('xtwone3four')).toBe(24);
    expect(getRowResultB('4nineeightseven2')).toBe(42);
    expect(getRowResultB('zoneight234')).toBe(14);
    expect(getRowResultB('7pqrstsixteen')).toBe(76);
    expect(getRowResultB('eighthreegjisevenine')).toBe(89);
    expect(
      getRowResultB('9fgsixzkbscvbxdsfive6spjfhzxbzvgbvrthreeoneightn'),
    ).toBe(98);
  });
});

describe('solvePuzzleA', () => {
  it('does the thing...', () => {
    expect(solvePuzzleA(testData1)).toBe(142);
  });
});

describe('solvePuzzleB', () => {
  it('does the thing...', () => {
    expect(solvePuzzleB(testData2)).toBe(281);
  });
});
