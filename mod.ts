import { bold, italic, yellow } from './deps.ts';
import { input } from './utils.ts';

// show help text at the start of a game
const title: string = bold(italic(yellow('\ndrink-if-exists')))
const helpText: string = `Enter an english word:
  - Take a ${italic('sip')} if an ${bold('NPM')} package under the name exists
  - Take a ${italic('shot')} if a ${bold('Deno')} package under the name exists

Good luck.
`;

const prompt = bold('Enter a word: ');

console.log(title);
console.log(helpText);

const word = input(prompt);
