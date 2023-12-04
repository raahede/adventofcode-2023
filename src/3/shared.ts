import { getRowsFromTextBlock, getSum } from '../1/shared';

export const getSymbolIndices = (input: string): number[] => {
  const regex = /[^.0-9]+/g;
  return Array.from(input.matchAll(regex)).map((match) => match.index || -1);
};

// first item in array is the number, second is the index:
export const getNumberInfo = (input: string): number[][] => {
  const regex = /[0-9]+/g;
  return Array.from(input.matchAll(regex)).map((match) => [
    parseInt(match[0]), // map number
    match.index ?? -1, // map index
  ]);
};

export const numbersWithAdjacentSymbols = (
  prevLine: string,
  currentLine: string,
  nexLine: string,
): number[] => {
  const symbolIndicesPrev = getSymbolIndices(prevLine);
  const symbolIndicesCurrent = getSymbolIndices(currentLine);
  const symbolIndicesNext = getSymbolIndices(nexLine);
  const numbersCurrent = getNumberInfo(currentLine);

  return numbersCurrent
    .filter(([number, index]) => {
      const numberLength = number.toString().length;
      const diagonalStartIndex = index === 0 ? index : index - 1;
      const diagonaEndIndex = index + numberLength;
      let hasAdjacantSymbol = false;
      [
        ...symbolIndicesPrev,
        ...symbolIndicesCurrent,
        ...symbolIndicesNext,
      ].every((symbolIndex) => {
        const isAdjacent =
          symbolIndex >= diagonalStartIndex && symbolIndex <= diagonaEndIndex;
        if (isAdjacent) {
          hasAdjacantSymbol = true;
          // Break loop
          return false;
        }
        return true;
      });
      console.log({ hasAdjacantSymbol });
      return hasAdjacantSymbol;
    })
    .map(([number]) => number);
};

export const solvePuzzleA = (input: string): number => {
  return 0;
};
