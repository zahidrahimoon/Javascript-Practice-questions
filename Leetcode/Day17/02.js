var mySqrt = function(x) {
    if (x < 0) {
        return -1; // Handle non-negative input requirement
    } 
    if (x === 0) {
        return 0; // The square root of 0 is 0
    }

    let res = 0;       // Initialize result
    let bit = 1 << 30; // The second-to-top bit is set: 1 << 30 for 32-bit integers
    
    // "bit" starts at the highest power of four <= x and iterates down to 1
    while (bit > x) {
        bit >>= 2;
    }

    while (bit !== 0) {
        if (x >= res + bit) {
            x -= res + bit;
            res = (res >> 1) + bit;
        } else {
            res >>= 1;
        }
        bit >>= 2;
    }
    
    return res;
};

console.log(mySqrt(4));  // Output: 2
console.log(mySqrt(8));  // Output: 2
console.log(mySqrt(9));  // Output: 3
console.log(mySqrt(15)); // Output: 3
console.log(mySqrt(16)); // Output: 4
