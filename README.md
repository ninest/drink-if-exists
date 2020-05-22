<h1 align="center">drink if exists</h1>
<p align="center"><img height="200" alt="icon" src="./readme-assets/icon.png" /></p>
<p align="center">The NPM drinking game recreated and cli-ified with Deno with Deno</p>

<p align="center">
  <a href="https://deno.land/">
    <img src="https://img.shields.io/badge/Made%20With-Deno-black?style=flat-square&" alt="Made with Deno" />
  </a>
  <a href="http://makeapullrequest.com/">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square" alt="Make a PR" />
  </a>
  <img src="https://img.shields.io/github/license/ninest/drink-if-exists?style=flat-square" alt="MIT" />
</p>

<p align="center"><img width="690" alt="demo" src="./readme-assets/demo.png" /></p>

To play the game, run the following command:
```
deno run --allow-net http://drink-if-exists.now.sh/mod.ts
```

## 🥴 How it works
The [NPMS API](https://npms.io/) was used to find NPM packages. To check if a Deno package exists, [database.json](https://github.com/denoland/deno_website2/blob/master/database.json) from [deno.land/x](https://deno.land/x/) (third party modules) is scraped.

## 🛠 Build setup
[Install Deno](https://deno.land/#installation), then clone or fork this repository. Run 

```
deno run --allow-net mod.ts
```

### Folder structure
The app is located in the `src/` folder, with the entry point being `mod.ts`.