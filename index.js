#!/usr/bin/env node
import inquirer from "inquirer";
const answers = await inquirer.prompt([
    {
        type: "number",
        name: "firstNumber",
        message: "enter your firstnumber"
    },
    {
        type: "number",
        name: "secondNumber",
        message: "enter your secondnumber"
    },
    {
        type: "list",
        name: "operator",
        message: "please select one operator to perform operation",
        choices: ["addition", "subtraction", "multiplication", "division"]
    }
]);
if (answers.operator === "addition") {
    console.log(answers.firstNumber + answers.secondNumber);
}
else if (answers.operator === "subtraction") {
    console.log(answers.firstNumber - answers.secondNumber);
}
else if (answers.operator === "multiplication") {
    console.log(answers.firstNumber * answers.secondNumber);
}
else if (answers.operator === "division") {
    console.log(answers.firstNumber / answers.secondNumber);
}
else
    console.log("input invalid");
