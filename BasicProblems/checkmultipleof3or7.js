let num  = 21;
if(num < 0){
    console.log("Invalid number");
}
else{
    if(num % 3 ==0 && num % 7 == 0){
        console.log("It is multiple of both 3 and 7");  
    }
    
    else if (num%7==0){
        console.log(`It is muliple of 7 ${num}`);
    }
    else if(num%3==0){
        console.log(`It is mulitple of 3 ${num}`);
    } 
    else{
        console.log("Invalid");
    }
}