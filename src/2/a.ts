import fs from 'fs';
import { gameConfig, solvePuzzleA } from './shared';

fs.readFile(__dirname + '/data.txt', (err, data) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }

  if (data) {
    try {
      console.log(solvePuzzleA(data.toString(), gameConfig));
    } catch (error) {
      console.error(err);
      process.exit(1);
    }
  }

  process.exit(0);
});
