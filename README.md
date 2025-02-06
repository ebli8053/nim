# A Game of Nim

This repository contains the code for Lesson 11 in the PKD course.

The instructions below assume your home folder for course work (where you have all code) is called `~/PKD/Code`, and that you have installed Jest and TypeScript, as instructed on Studium.

1. Download this repository: go to your code folder (e.g. `cd ~/PKD/Code`) and run
   
      ```git clone https://github.com/malyzajko/nim.git lesson11```

   (The 'lesson11' in the clone command will name the resulting folder 'lesson11' instead of 'nim').
2. Install a simple command-line prompt library by running the following commands in your ~/PKD/Code folder (depending on your platform, you may need to use `sudo` before the commands):

   ```npm install --save prompt-sync```
   
   ```npm install --save-dev @types/prompt-sync```
   
3. Compile all code files by `tsc --strict ~/PKD/Code/lesson11/*.ts`, or go into the lesson11/ folder and run `tsc --strict *.ts`
4. Run the code (game) with `node ~/PKD/Code/lesson11/main.js`, or if you are in the lesson11/ folder: `node main.js`
