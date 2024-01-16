let number = prompt("Enter the number");
let fact = 1;

function factr(n){
    if(n<=number){
    fact*=n;
    n++;
    factr(n);
    }
    else{
        console.log(`The factorial of ${number} is ${fact}`);
    }
}
    factr(1);

