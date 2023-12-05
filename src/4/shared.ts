import { getRowsFromTextBlock, getSum } from '../1/shared';

const parseNumberString = (numberString: string): number[] =>
  numberString
    .trim()
    .split(' ')
    .filter((str) => !!str)
    .map((str) => parseInt(str.trim()));

export const getCardNumbers = (input: string): number[][] => {
  const winningNumbersStr = input.substring(
    input.indexOf(':') + 1,
    input.indexOf('|') - 1,
  );
  const numbersStr = input.substring(input.indexOf('|') + 1);

  return [parseNumberString(winningNumbersStr), parseNumberString(numbersStr)];
};

export const getCardId = (input: string): number => {
  const idStr = input.match(/(?<=Card \s*).*?(?=\s*:)/gs);
  if (!idStr) throw new Error('Could not find ID');
  return parseInt(idStr[0]);
};

type Card = { id: number; points: number; matches: number };

export const getCardInfo = (input: string): Card => {
  const id = getCardId(input);
  const [winningNumbers, numbers] = getCardNumbers(input);
  const matchingNumbers = numbers.filter((num) => winningNumbers.includes(num));
  // Starting with 1 point, multiply by 2 for each matching number
  const points = matchingNumbers.reduce(
    (partialSum) => (partialSum === 0 ? 1 : partialSum * 2),
    0,
  );
  return { id, points, matches: matchingNumbers.length };
};

export const getCardPoints = (input: string): number =>
  getCardInfo(input).points;

// Ugly solution, but it works
// Counts number of cards of specific id and adds to map
// {
//   1: 1,
//   2: 2,
//   3: 4
// }
export const getCardCopies = (
  { id, matches }: Card,
  cards: Card[],
  cardCopiesMap: { [key: number]: number },
): { [key: number]: number } => {
  cardCopiesMap[id] = cardCopiesMap[id] ? cardCopiesMap[id] + 1 : 1;
  for (let index = 0; index < matches; index++) {
    const nextCardId = id + index + 1;
    if (nextCardId > cards.length) break;
    getCardCopies(cards[nextCardId - 1], cards, cardCopiesMap);
  }

  return cardCopiesMap;
};

export const solvePuzzleA = (input: string): number => {
  const rows = getRowsFromTextBlock(input);
  const rowResults = rows.map((row) => getCardPoints(row));
  return getSum(rowResults);
};

export const solvePuzzleB = (input: string): number => {
  const rows = getRowsFromTextBlock(input);
  const cards = rows.map((row) => getCardInfo(row));
  const cardCopiesMap = {};
  cards.forEach((card) => getCardCopies(card, cards, cardCopiesMap));
  return getSum(Object.values(cardCopiesMap));
};
