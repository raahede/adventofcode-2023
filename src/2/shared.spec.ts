import { describe, expect, it } from 'vitest';
import { mapGameData, solvePuzzleA } from './shared';

const testData1 = `

Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue
Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red
Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red
Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green

`;

describe('mapGameData', () => {
  it('maps game data correctly from string', () => {
    expect(
      mapGameData('Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green'),
    ).toStrictEqual({
      id: 1,
      green: 2,
      blue: 6,
      red: 4,
    });
  });
});

describe('solvePuzzleA', () => {
  it('does the thing...', () => {
    expect(solvePuzzleA(testData1)).toBe(8);
  });
});
