import inquirer from "inquirer";
let myBalance = 5000;
let myPin = 1234;
let pinAnswer = await inquirer.prompt([{
        name: "pin",
        message: "enter your pin",
        type: "number"
    }]);
if (pinAnswer.pin === myPin) {
    console.log("Pin is Correct, Login Successfully  !");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "saelect an operation:",
            choices: ["Withdraw Amount", "Check Balance"]
        }
    ]);
    if (operationAns.operation === "Withdraw Amount") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: "Enter the Amount to withdraw:"
            }
        ]);
        if (amountAns.amount > myBalance) {
            console.log("Insufficiant Answer");
        }
        else {
            myBalance -= amountAns.amount;
            console.log(`${amountAns.amount} Withdraw Successfully`);
            console.log(`Your remaining balance is: ${myBalance} `);
        }
    }
    else if (operationAns.operation === "Check Balance") {
        console.log(`Your account balance is ${myBalance} `);
    }
}
else {
    console.log("Pin is Incorrect, Try Again!");
}
