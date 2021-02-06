import { bold, italic, blue, bgYellow, bgRed, white, black } from "./deps.ts";

import { hr } from "./utils.ts";
import { helpText, title } from "./resources.ts";
import { getNpmPackage, getDenoPackage } from "./package.ts";

export const startGame = async () => {
  const wordPrompt = bold("Enter a word:");

  console.log(title);
  console.log(helpText);

  while (true) {
    const word = window.prompt(wordPrompt)?.trim();

    // Exit condition
    if (word === "-1") break;

    // Make sure an input is provided
    if (word?.trim() == "") {
      console.log(italic("^ That's not a valid package name\n"));
      continue;
    }

    console.log();

    const npmPackageRes = await getNpmPackage(word!);
    const denoPackageRes = await getDenoPackage(word!);

    if (npmPackageRes.error || denoPackageRes.error) {
      console.log("Please check your network connection");
    }

    const npmPackage = npmPackageRes.data;
    const denoPackage = denoPackageRes.data;

    if (npmPackage.exists) {
      console.log("It exists on NPM:");

      // Not all NPM packages have a description
      const name = npmPackage?.name ?? "";
      const desc = npmPackage?.description ?? "No description provided";

      console.log(`${italic(white(name))} (NPM): ${blue(desc)}`);
    } else {
      console.log(
        `${italic(
          word!
        )} does not exist on NPM! You should write it and maintain it.`
      );
    }

    if (denoPackage.exists) {
      // if it doesn't exist on NPM but exists here, put a line above
      if (!npmPackage.exists) console.log("\n");

      // if it ALSO exists here, put a line above the message and put 'also' in the string
      if (npmPackage.exists)
        console.log(`\nIt ${italic("also")} exists on deno.land/x:`);
      else console.log("It exists on deno.land/x:");
      console.log(
        `${italic(white(denoPackage?.name!))} (deno.land/x): ${blue(
          denoPackage?.description ?? ""
        )}`
      );
    }

    /*
    If exists on NPM, sip
    if exists on Deno, shot
    */

    if (denoPackage.exists) {
      console.log(`\n${bgYellow(bold(black(" Take a shot 🥃 ")))}`);
    } else if (npmPackage.exists) {
      console.log(`\n${bgRed(bold(white(" Take a sip 🍷 ")))}`);
    }

    // Leave a line an show a divider
    console.log(`\n${hr()}`);
  }
};
