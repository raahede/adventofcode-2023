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

      return hasAdjacantSymbol;
    })
    .map(([number]) => number);
};

export const symbolsWithAdjacentNumbers = (
  prevLine: string,
  currentLine: string,
  nexLine: string,
): number[][] => {
  const numbersPrev = getNumberInfo(prevLine);
  const numbersCurrent = getNumberInfo(currentLine);
  const numbersNext = getNumberInfo(nexLine);
  const symbolsCurrent = getSymbolIndices(currentLine);

  return symbolsCurrent.flatMap((symbolIndex) => {
    const adjacentNumbers: number[] = [];
    [...numbersPrev, ...numbersCurrent, ...numbersNext].forEach(
      ([number, numberIndex]) => {
        const numberLength = number.toString().length;
        const diagonalStartIndex =
          numberIndex === 0 ? numberIndex : numberIndex - 1;
        const diagonaEndIndex = numberIndex + numberLength;
        const isAdjacent =
          symbolIndex >= diagonalStartIndex && symbolIndex <= diagonaEndIndex;
        if (isAdjacent) {
          adjacentNumbers.push(number);
        }
      },
    );

    if (adjacentNumbers.length === 2) return [adjacentNumbers];
    return [];
  });
};

export const solvePuzzleA = (input: string): number => {
  const rows = getRowsFromTextBlock(input);
  let numbers: number[] = [];

  for (let i = 0; i < rows.length; i++) {
    const prevLine = i !== 0 ? rows[i - 1] : '';
    const currentLine = rows[i];
    const nexLine = i !== rows.length - 1 ? rows[i + 1] : '';
    numbers = numbers.concat(
      numbersWithAdjacentSymbols(prevLine, currentLine, nexLine),
    );
  }

  return getSum(numbers);
};

export const solvePuzzleB = (input: string): number => {
  const rows = getRowsFromTextBlock(input);
  let numbers: number[] = [];

  for (let i = 0; i < rows.length; i++) {
    const prevLine = i !== 0 ? rows[i - 1] : '';
    const currentLine = rows[i];
    const nexLine = i !== rows.length - 1 ? rows[i + 1] : '';
    numbers = numbers.concat(
      symbolsWithAdjacentNumbers(prevLine, currentLine, nexLine).map(
        ([a, b]) => a * b,
      ),
    );
  }

  return getSum(numbers);
};
