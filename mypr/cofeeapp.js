const readline = require("readline");
const { stdin: input, stdout: output } = require("process");
let clc = require("cli-color");

const coffeeShop = () => {
  const rl = readline.createInterface({ input, output });

  console.log("1-black cofee rs 300, 2-latte 200");
  rl.question("pleas select the menu \n", (menu) => {
    if (menu == 1) {
      console.log("preparing your coffee...");
      setTimeout(() => {
        console.log("cofee ready you have to pay rs 300");
        rl.close();
      }, 2000);
    } else if (menu == 2) {
      console.log("preparing your coffee...");
      setTimeout(() => {
        console.log("cofee ready you have to pay rs 200");
        rl.close();
      }, 2000);
    } else {
      console.log("not found");
      rl.close();
    }
  });
};
coffeeShop();
