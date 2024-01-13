let number= prompt("Enter the number");
let a=0;
let b=1;
let temp

function tempr(number){ 
    for(let i=0; i<number; i++) { 
    temp=a+b;
    a=b;
    b=temp;
    console.log(temp)
    }
}
tempr();
