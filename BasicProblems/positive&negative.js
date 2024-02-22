//Write a JavaScript program to check two given integers whether one is positive and another one is negative.

const num1 = 3;
const num2 = -3;

if(num1 > 0 && num2 > 0) {
    console.log(`${num1} is positive and ${num2} is positive.`);
}
else if(num1 < 0 && num2 < 0) {
    console.log( `${num1} is negative and ${num2} is negative.` );
}
else if(num1 > 0 && num2 < 0) {
    console.log(`${num1} is positive and ${num2} is negative.`);
}
else if(num1 < 0 && num2 > 0) {
    console.log(`${num1} is negative and ${num2} is positive.`);
}
else{
    console.log("Invalid");
}