// Given a non-negative integer x, return the square root of x rounded down to the nearest integer.
//The returned integer should be non-negative as well.
// You must not use any built-in exponent function or operator.

var mySqrt = function(x) {
    if(x < 0){
       return -1;
    } 
    if(x === 0){
        return 0;
    }

    if(x > 0){
        for(let i = 0; i < x; i++){
            if(i * i === x){
                return i;
            }
        }
    }
};
console.log(mySqrt(4));