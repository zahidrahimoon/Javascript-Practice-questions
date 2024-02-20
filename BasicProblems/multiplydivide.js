const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output:  process.stdout,
});

rl.question('Enter the num1: ', (num1) => {
    rl.question('Enter the num2: ', (num2) => {
        num1 = parseFloat(num1);
        num2 = parseFloat(num2);

        const multiply = num1 * num2;
        const divide = num1 / num2;

        console.log(`Multiplication of ${num1} and ${num2} is ${multiply}`);
        console.log(`Division of ${num1} and ${num2} is ${divide}`);

        rl.close();
    });
});
