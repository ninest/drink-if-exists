import { bold, italic, yellow } from './deps.ts';

import { input } from './utils.ts';
import { getNpmPackage } from './package_service.ts';

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


while (true){
  let word = await input(prompt);

  // exit condition
  if (word === '-1') break;

  // make sure input is valid
  if (word?.trim() == '') {
    console.log('^ That\'s not a valid package name');
  }


  // (1) check if NPM package exists
  const npmPackage = await getNpmPackage(word);

  if (npmPackage.exists === true) {
    // console.log(`${word} exists: ${npmPackage.description}.`)
  } else {
    // console.log(`${word} does not exist! You should write it and maintain it.`)
  }
  
  // leave a line at the end
  console.log();
}