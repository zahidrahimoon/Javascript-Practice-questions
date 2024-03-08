let number1 = 40;
let number2 = 70;
const number = 100;

let result1 = Math.abs(number - number1);
let result2 = Math.abs(number - number2);

if(result1 < result2){
    console.log(`${result1} is smaller than ${result2}`);
}
else{
    console.log(`${result2} is smaller than ${result1}`);
}
 