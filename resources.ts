import { bold, italic, yellow } from "./deps.ts";

export const title = bold(italic(yellow("\ndrink-if-exists")));
export const helpText = `Enter an english word:
  - Take a ${italic("sip")} if an ${bold("NPM")} package under the name exists
  - Take a ${italic("shot")} if a ${bold("Deno")} package under the name exists

Good luck.
`;
