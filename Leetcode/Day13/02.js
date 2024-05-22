var isPalindrome = function(x) {
    // Negative numbers are not palindromes
    if (x < 0) {
        return false;
    }

    // Numbers ending in 0 are not palindromes unless the number is 0
    if (x % 10 === 0 && x !== 0) {
        return false;
    }

    // Reverse half of the number
    let reversed = 0;
    while (x > reversed) {
        reversed = reversed * 10 + x % 10;
        x = Math.floor(x / 10);
    }

    // Check if the number is the same when read forward and backward
    return x === reversed || x === Math.floor(reversed / 10);
};
console.log(isPalindrome(121)); // true