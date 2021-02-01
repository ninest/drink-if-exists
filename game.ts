import { bold, italic, blue, bgYellow, bgRed, white } from "./deps.ts";

import { input } from "./utils.ts";
// import { getNpmPackage, getDenoPackage } from "./package_service.ts";
import { helpText, title } from "./resources.ts";
import { getNpmPackage, getDenoPackage } from "./package.ts";

export const startGame = async () => {
  const prompt = bold("Enter a word: ");

  console.log(title);
  console.log(helpText);

  while (true) {
    let word = (await input(prompt))?.trim();

    // exit condition
    if (word === "-1") break;

    // make sure input is valid
    if (word?.trim() == "") {
      console.log("^ That's not a valid package name");
      continue;
    }

    const npmPackageRes = await getNpmPackage(word!);
    const denoPackageRes = await getDenoPackage(word!);

    if (npmPackageRes.error || denoPackageRes.error) {
      console.log("Please check your network connection");
    }

    const npmPackage = npmPackageRes.data;
    const denoPackage = denoPackageRes.data;

    // console.log(npmPackage.data);
    // console.log(denoPackage.data);

    // Leave line
    console.log();

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
      console.log(`\n${bgYellow(bold(white(" Take a shot 🥃 ")))}`);
    } else if (npmPackage.exists) {
      console.log(`\n${bgRed(bold(white(" Take a sip 🍷 ")))}`);
    }

    // leave lines at the end
    console.log("\n\n");
  }
};
