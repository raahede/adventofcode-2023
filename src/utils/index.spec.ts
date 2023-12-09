import { describe, expect, it } from 'vitest';
import {
  getNumberRowsFromTextBlock,
  getNumbersFromString,
  getRowsFromTextBlock,
} from '.';

const testData1 = `

1abc2
pqr3stu8vwx
a1b2c3d4e5f
treb7uchet

`;

const testData2 = `

0 3 6 9 12 15
1 3 6 10 15 21
10 13 16 21 30 45

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

describe('getNumberRowsFromTextBlock', () => {
  it('returns cleaned number rows from text block', () => {
    expect(getNumberRowsFromTextBlock(testData2)).toStrictEqual([
      [0, 3, 6, 9, 12, 15],
      [1, 3, 6, 10, 15, 21],
      [10, 13, 16, 21, 30, 45],
    ]);
  });
});
