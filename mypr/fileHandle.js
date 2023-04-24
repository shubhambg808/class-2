const fs = require("fs");
const readline = require("readline");
const { stdin: input, stdout: output } = require("process");
const rl = readline.createInterface({ input, output });
const clc = require("cli-color");
// fs.writeFile("./new.txt", "hello shubahm ", (err, data) => {
//   console.log(err);
//   console.log(data);
// });

rl.question(
  clc.yellow("give yout data to be inserted in the new.txt file \n"),
  (operation) => {
    fs.appendFile("./new.txt", `${operation} \n`, (err, data) => {
      console.log("err", err);
      console.log(data);
      rl.close;
    });
  }
);
