// import { readLines } from 'https://deno.land/std@v0.51.0/io/bufio.ts';
import { bold, italic, yellow } from 'https://deno.land/std/fmt/colors.ts';

// show help text at the start of a game
const title: string = bold(italic(yellow('\ndrink-if-exists')))
const helpText: string = `Enter an english word:
  - Take a ${italic('sip')} if an ${bold('NPM')} package under the name exists
  - Take a ${italic('shot')} if a ${bold('Deno')} package under the name exists

Good luck.
`;
console.log(title);
console.log(helpText);