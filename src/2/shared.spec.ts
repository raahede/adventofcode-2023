import { describe, expect, it } from 'vitest';
import { gameConfig, gameIsPossible, solvePuzzleA } from './shared';

const testData1 = `

Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue
Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red
Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red
Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green

`;

describe('gameIsPossible', () => {
  it('checks if all color numbers are below the config max', () => {
    expect(
      gameIsPossible(
        'Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green',
        gameConfig,
      ),
    ).toBe(true);
    expect(
      gameIsPossible(
        'Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue',
        gameConfig,
      ),
    ).toBe(true);
    expect(
      gameIsPossible(
        'Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red',
        gameConfig,
      ),
    ).toBe(false);
    expect(
      gameIsPossible(
        'Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red',
        gameConfig,
      ),
    ).toBe(false);
    expect(
      gameIsPossible(
        'Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green',
        gameConfig,
      ),
    ).toBe(true);
  });
});

describe('solvePuzzleA', () => {
  it('does the thing...', () => {
    expect(solvePuzzleA(testData1, gameConfig)).toBe(8);
  });
});
