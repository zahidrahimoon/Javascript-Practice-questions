//Write a JavaScript program to check whether a given integer is within 20 of 100.

let number = 90;
const givenNumber = 100;
let absoluteNumber= Math.abs(givenNumber - number);
if(absoluteNumber <= 20){
    if(absoluteNumber === 20){
        console.log("It is equal to 20 which is" + absoluteNumber);
    }
    else{
        console.log("It is less than 20 which is " + absoluteNumber);

    }
}
else{
    console.log("It is greater than 20 which is " + absoluteNumber);
} 