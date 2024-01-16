let num;
function sum(num){
    if(num>0){
        return num +sum(num-1);
    }
    else{
        return num;
    }

}
let result =sum(10);
console.log(`the sum is ${result}`);
