import { describe, expect, it } from 'vitest';
import { extrapolateNextNumberInRow, solvePuzzleA } from './shared';

const testData1 = `

0 3 6 9 12 15
1 3 6 10 15 21
10 13 16 21 30 45

`;

describe('extrapolateNextNumberInRow', () => {
  it('finds the next number in row based on defined puzzle logic', () => {
    expect(extrapolateNextNumberInRow([0, 3, 6, 9, 12, 15])).toBe(18);
    expect(extrapolateNextNumberInRow([0, -1, 2])).toBe(9);
    expect(extrapolateNextNumberInRow([1, 3, 6, 10, 15, 21])).toBe(28);
    expect(extrapolateNextNumberInRow([10, 13, 16, 21, 30, 45])).toBe(68);
  });
});

describe('solvePuzzleA', () => {
  it('does the thing...', () => {
    expect(solvePuzzleA(testData1)).toBe(114);
  });
});
