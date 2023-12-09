export const getRowsFromTextBlock = (input: string): string[] => {
  return input
    .split('\n')
    .map((str) => str.trim())
    .filter((str) => !!str);
};

export const getNumbersFromString = (input: string): number[] => {
  return input.split('').flatMap((char) => {
    const parsed = parseInt(char);
    return !isNaN(parsed) ? [parsed] : [];
  });
};

export const getNumberRowsFromTextBlock = (input: string): number[][] =>
  getRowsFromTextBlock(input).map((row) =>
    row.split(' ').flatMap((char) => {
      const parsed = parseInt(char);
      return !isNaN(parsed) ? [parsed] : [];
    }),
  );
