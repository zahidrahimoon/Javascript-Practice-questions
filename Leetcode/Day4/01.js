//1. Write a function that takes an array of numbers as arguments and returns the sum of those numbers using the rest operator.

function Add(...arr){
    let sum = 0;
    for (let index = 0; index < arr.length; index++) {
        sum += arr[index];
    }
    return sum;
}
const myArray = [1,2,3,4,5];
console.log(Add(...myArray));
