// using switch---------------------->

const readline = require("readline");
const { stdin: input, stdout: output } = require("process");
const rl = readline.createInterface({ input, output });

// rl.question(
//   "pleas enter task of your choice 1-add 2-subtract 3-multiply 4-division \n",
//   (operation) => {
//     switch (+operation) {
//       case 1:
//         rl.question("enter first number to add \n ", (fn) => {
//           rl.question("enter second number \n", (sn) => {
//             console.log(+fn + +sn);
//             rl.close(); //you need to close it always otherwise it wont come out of prompt
//           });
//         });
//         break;
//       case 2:
//         rl.question("enter first number to subtract \n", (fn) => {
//           rl.question("enter second number \n", (sn) => {
//             console.log(+fn - +sn);
//             rl.close();
//           });
//         });
//         break;
//       case 3:
//         rl.question("enter first number to multily \n", (fn) => {
//           rl.question("enter second number \n", (sn) => {
//             console.log(+fn * +sn);
//             rl.close();
//           });
//         });
//         break;
//       case 4:
//         rl.question("enter first number to devide \n", (fn) => {
//           rl.question("enter second number \n", (sn) => {
//             console.log(+fn / +sn);
//             rl.close();
//           });
//         });
//         break;
//       default:
//         console.log("try again ");
//         rl.close();

//         break;
//     }
//   }
// );

// by function shorter syntax---->

// const calculate = (rl, operaiton) => {
//   rl.question("enter first number  \n ", (fn) => {
//     rl.question("enter second number \n", (sn) => {
//       if (operaiton == 1) {
//         console.log(+fn + +sn);
//         rl.close();
//       } else if (operaiton == 2) {
//         console.log(+fn - +sn);
//         rl.close();
//       } else if (operaiton == 3) {
//         console.log(+fn * +sn);
//         rl.close();
//       } else if (operaiton == 4) {
//         console.log(+fn / +sn);
//         rl.close();
//       } else {
//         console.log("try again value not exist ");
//         rl.close();
//       }
//     });
//   });
// };

const userHandle = () => {
  rl.question(
    "pleas enter task of your choice 1-add 2-subtract 3-multiply 4-division \n",
    (operaiton) => {
      rl.question("enter first number  \n ", (fn) => {
        rl.question("enter second number \n", (sn) => {
          if (operaiton == 1) {
            console.log(+fn + +sn);
            rl.close();
          } else if (operaiton == 2) {
            console.log(+fn - +sn);
            rl.close();
          } else if (operaiton == 3) {
            console.log(+fn * +sn);
            rl.close();
          } else if (operaiton == 4) {
            console.log(+fn / +sn);
            rl.close();
          } else {
            console.log("try again value not exist ");
            rl.close();
          }
        });
      });
      // calculate(rl, operaiton);
    }
  );
};
userHandle();

// _____________________________________
