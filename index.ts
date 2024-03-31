#! /usr/bin/env node
import inquirer from "inquirer";

const randomNumber = Math.floor(Math.random() * 6 + 1);
const answer = await inquirer.prompt([
  {
    name: "userguessednumber",
    type: "number",
    message: "please guess a number between 1-6",
  },
]);
if (answer.userguessednumber===randomNumber){
    console.log("congratulation! your answer is correct");
}
else{
    console.log("your answer is wrong");
}