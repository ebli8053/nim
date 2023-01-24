# Installation and running this project stub
1. Install `npm` in some way.
2. Call `npm install`. It installs `typescript`, `jest` and `ts-jest`. The details of *what* gets installed is described in `package.json`.
3. Call `npm test` to run all tests. In `package.json`, this is defined to just call `jest`. Jest is in turn configured by `jest.config.js`. It will compile all typescript files and run tests located in files called `*.test.ts`.
4. Call `npm start` to start the program. It will compile the program with `tsc` and then run the program using `node`.

The file `.gitignore` is to tell git, the version control software, to not track the compiled output files.
You can safely ignore that file and pretend it does not exist.

### Troubleshooting
Running Jest on windows can sometimes be VERY slow. A test that should take 1.5 seconds takes 30 seconds when running on some windows file system. Moving the code to the linux partition of WSL solves the problem.

Jest will also crash mysteriously if your node version is too old. Using a recent version of node should do it.