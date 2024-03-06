let num1, num2, num3;

function Range( num1 , num2 , num3 ){
    
    if(num1 >= 50 && num1 <= 99 || num2 >= 50 && num2 <= 99 || num3 >= 50 && num3 <= 99){
        return true;
    }
    else{
        return false;
    }
 }
console.log( Range(31, 55, 80));
console.log( Range(31, 25, 10)); 