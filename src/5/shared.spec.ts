import { describe, expect, it } from 'vitest';
import { getData, getMapResults, solvePuzzleA } from './shared';

const testData0 = `

seeds: 79 14 55 13

seed-to-soil map:
50 98 2
52 50 48

soil-to-fertilizer map:
0 15 37
37 52 2
39 0 15

`;

const testData1 = `

seeds: 79 14 55 13

seed-to-soil map:
50 98 2
52 50 48

soil-to-fertilizer map:
0 15 37
37 52 2
39 0 15

fertilizer-to-water map:
49 53 8
0 11 42
42 0 7
57 7 4

water-to-light map:
88 18 7
18 25 70

light-to-temperature map:
45 77 23
81 45 19
68 64 13

temperature-to-humidity map:
0 69 1
1 0 69

humidity-to-location map:
60 56 37
56 93 4

`;

describe('getData', () => {
  it('gets data formatted nicely', () => {
    expect(getData(testData0)).toStrictEqual({
      seeds: [79, 14, 55, 13],
      maps: [
        [
          [50, 98, 2],
          [52, 50, 48],
        ],
        [
          [0, 15, 37],
          [37, 52, 2],
          [39, 0, 15],
        ],
      ],
    });
  });
});

describe('getMapResults', () => {
  it('gets output from map', () => {
    expect(
      getMapResults(
        [79, 14, 55, 13],
        [
          [50, 98, 2],
          [52, 50, 48],
        ],
      ),
    ).toStrictEqual([81, 14, 57, 13]);
  });
});

describe('solvePuzzleA', () => {
  it('does the thing...', () => {
    expect(solvePuzzleA(testData1)).toBe(35);
  });
});

// describe('solvePuzzleB', () => {
//   it('does the thing...', () => {
//     expect(solvePuzzleB(testData1)).toBe(30);
//   });
// });
