//const prompt = require("prompt-sync")(); // Please don't touch me :)

// The prompt method allows us to take an input from the user.
// Run the code to see how to use prompt.
//const name = prompt("What's your name? ");
//console.log(`Hi, I'm ${name}.`);

let num1 = 5;
let num2 = 3;
let operator = "-";

if (operator === "+") {
  console.log(` ${num1 + num2} `);
} else if (operator === "-") {
  console.log(` ${num1 - num2} `);
} else if (operator === "*") {
  console.log(` ${num1 * num2} `);
} else {
  console.log(` ${num1 / num2} `);
}
