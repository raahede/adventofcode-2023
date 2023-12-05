import { describe, expect, it } from 'vitest';
import {
  getCardNumbers,
  getCardPoints,
  solvePuzzleA,
  solvePuzzleB,
} from './shared';

const testData1 = `

Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53
Card 2: 13 32 20 16 61 | 61 30 68 82 17 32 24 19
Card 3:  1 21 53 59 44 | 69 82 63 72 16 21 14  1
Card 4: 41 92 73 84 69 | 59 84 76 51 58  5 54 83
Card 5: 87 83 26 28 32 | 88 30 70 12 93 22 82 36
Card 6: 31 18 13 56 72 | 74 77 10 23 35 67 36 11

`;

describe('getCardNumbers', () => {
  it('returns two sets of numbers from string', () => {
    expect(
      getCardNumbers('Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53'),
    ).toStrictEqual([
      [41, 48, 83, 86, 17],
      [83, 86, 6, 31, 17, 9, 48, 53],
    ]);
  });
});

describe('getCardPoints', () => {
  it('calculates the card value', () => {
    expect(
      getCardPoints('Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53'),
    ).toBe(8);
    expect(
      getCardPoints('Card 2: 13 32 20 16 61 | 61 30 68 82 17 32 24 19'),
    ).toBe(2);
    expect(
      getCardPoints('Card 3:  1 21 53 59 44 | 69 82 63 72 16 21 14  1'),
    ).toBe(2);
    expect(
      getCardPoints('Card 4: 41 92 73 84 69 | 59 84 76 51 58  5 54 83'),
    ).toBe(1);
    expect(
      getCardPoints('Card 5: 87 83 26 28 32 | 88 30 70 12 93 22 82 36'),
    ).toBe(0);
    expect(
      getCardPoints('Card 6: 31 18 13 56 72 | 74 77 10 23 35 67 36 11'),
    ).toBe(0);
  });
});

describe('solvePuzzleA', () => {
  it('does the thing...', () => {
    expect(solvePuzzleA(testData1)).toBe(13);
  });
});

describe('solvePuzzleB', () => {
  it('does the thing...', () => {
    expect(solvePuzzleB(testData1)).toBe(30);
  });
});
