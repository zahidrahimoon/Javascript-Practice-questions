let n =5;
function fact(n){
    if(n==0 || n==1){
        return 1;
    }
    return n * fact(n-1);
}

let result = fact(n);
console.log(`The Factorial of ${5} is ${result}`);