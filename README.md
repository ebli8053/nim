# Installation and running this project stub

First, make sure to install `npm` in some way. It is the package manager commonly used with javascript and node.js. You can verify the installation with `npm --version` in the terminal.

Then install the required packages and dependencies with `npm install --include=dev`. This will read the file `package.json` and install what it needs to compile, run, test and lint the project.

- To run the tests, run `npx jest`. The configuration is specified in `.eslintrc.js`. You don't need to recompile the typescript manually.
- To lint, run `npx eslint .`. The configuration is specified in `.eslintrc.js`
- To compile, run `npx tsc`. The configuration is specified in `tsconfig.json`. It locates all typescript files to compile, and puts the output into the `./build` folder. It makes sure the compilation is in strict mode.
- To run the compiled javascript, run `node build/main.js`

Notice that the commands `jest` and `eslint` and `tsc` are prefixed with `npx`. Doing that makes sure that it is the correct version of eslint, jest and typescript that is used, so that there is no confusion about that.

The file `.gitignore` is to tell git, the version control software, to not track the compiled output files.
You can safely ignore that file and pretend it does not exist.

### Troubleshooting

Running Jest on windows can sometimes be VERY slow. A test that should take 1.5 seconds takes 30 seconds when running on some windows file system. Moving the code to the linux partition of WSL solves the problem.

Jest will also crash mysteriously if your node version is too old. Using a recent version of node should do it.

This project assumes we use CommonJS modules, since that is the "normal" thing to do in typescript node.js applications. Some libraries on npm are not compatible with CommonJS, but only provide ECMAscript modules. One such example is `random`. If you get such problems, simple use another library.

Writing cli apps in plain node.js is not advisable. One could use https://nodejs.org/api/readline.html#readline, but this is a pains since it is callback based, or promises based (will be similar experience to callbacks. equally bad.