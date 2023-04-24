const readline = require("readline");
let clc = require("cli-color");
const { stdin: input, stdout: output } = require("process");
const rl = readline.createInterface({ input, output });

const next = (operation) => {
  setTimeout(() => {
    if (operation == 1) {
      console.log("you NESCAFE is ready at just rs 40/- ");
    } else {
      console.log("you BRU coffee is ready at just rs 30/- ");
    }
    rl.close();
  }, 1000);
};

const wait = (operation) => {
  if (operation > 2) {
    console.log("invalid selection");
    rl.close();
  } else {
    setTimeout(() => {
      console.log("your cofee is preparing...");
      next(operation);
    }, 2200);
  }
};

const handleUser = () => {
  rl.question(
    clc.blue(
      "hello customer which cofee would you like to take --> [1 - NESCAFE 40]  [2 - BRU RS 30] \n"
    ),

    (operation) => {
      rl.question("pleas choose from the list \n");
      wait(+operation);
    }
  );
};
handleUser();
