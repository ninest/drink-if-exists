import { bold, italic, yellow, blue, black, bgYellow, bgRed, white } from './deps.ts';

import { input } from './utils.ts';
import { getNpmPackage, getDenoPackage } from './package_service.ts';

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


while (true) {
  let word = (await input(prompt))?.trim();

  // exit condition
  if (word === '-1') break;

  // make sure input is valid
  if (word?.trim() == '') {
    console.log('^ That\'s not a valid package name');
  }


  const npmPackage = await getNpmPackage(word);
  const denoPackage = await getDenoPackage(word);

  // leave a line
  console.log();

  if (npmPackage.exists) {
    console.log('It exists on NPM:')
    console.log(`${italic(white(npmPackage.result?.name!))} (NPM): ${blue(npmPackage.result?.desc!)}`);
  } else {
    console.log(`${italic(word!)} does not exist on NPM! You should write it and maintain it.`);
  }

  if (denoPackage.exists) {
    // if it doesn't exist on NPM but exists here, put a line above
    if (!npmPackage.exists) console.log('\n');

    // if it ALSO exists here, put a line above the message and put 'also' in the string
    if (npmPackage.exists) console.log(`\nIt ${italic('also')} exists on deno.land/x:`);
    else console.log('It exists on deno.land/x:');
    console.log(`${italic(white(denoPackage.result?.name!))} (deno.land/x): ${blue(denoPackage.result?.desc!)}`);
  }


  /*
  If exists on NPM, sip
  if exists on Deno, shot
  */

  if (denoPackage.exists) {
    console.log(`\n${bgYellow(bold(white(' Take a shot 🥃 ')))}`);
  } else if (npmPackage.exists) {
    console.log(`\n${bgRed(bold(white(' Take a sip 🍷 ')))}`);
  }
  
  // leave lines at the end
  console.log('\n\n');
}