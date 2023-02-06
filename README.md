# Installing and running the game of Nim

The instructions below assume your home folder for course work (where you have all code) is called `~/PKD`.

1. Download this repository. Either as a zip-file that you unzip into `~/PKD/lesson11` or run `cd ~/PKD` and `git clone https://github.com/el-hult/ts-boilerplate.git lesson11`.
2. Make sure to install `TypeScript`, `jest` and `eslint` as explained on Studium.
3. Install `npm install --save prompt-sync` and `npm install --save-dev @types/prompt-sync`
3. Compile all code by `cd ~/PKD/lesson11` and `tsc *.ts`. (Do note that this compilation is in `--strict` mode if you did create the appropriate `tsconfig.json` while installing `eslint`)
4. Run the code with `node main.js`

When making changes to the code, run `jest .` and `eslint .` to make sure the code still passes all tests and fulfils the stiles.