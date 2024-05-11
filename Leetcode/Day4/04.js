//4. Implement a function that takes any number of arguments and returns the maximum value using the rest operator.

function numberfnc(...agrs){
    let num1 = agrs[0];
    let num2 = agrs[1];
    if(num1 > num2){
        console.log(`The larger number is ${num1}`);
    }else{
        console.log(`The larger number is ${num2}`);
    }
    return num1 > num2 ? num1 : num2;
}
console.log(numberfnc(5,7));