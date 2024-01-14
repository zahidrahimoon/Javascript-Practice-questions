let number = prompt("Enter the Number");

for(let i=0; i<number; i++){
    if(number%i==0){
        console.log(`${i} is a factor of ${number}`);
    }
}