let num1=parseInt(prompt("Enter the num1"));
let num2=parseInt(prompt("Enter the num2"));
let num3=parseInt(prompt("Enter the num3"));


if(!isNaN(num1) && !isNaN(num2) && !isNaN(num3)){
if(num1%10===num2%10 && num3%10===num1%10){
    console.log("They have similar last digit");
}
else{
    console.log("Invalid");
}
}
else{
    console.log("Please enter valid numbers");
}