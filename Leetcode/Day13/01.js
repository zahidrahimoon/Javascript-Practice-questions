var isPalindrome = function(x) {
    // Convert the number to a string
    let str = x.toString();
    
    // Reverse the string
    let reversedStr = str.split('').reverse().join('');
    
    // Check if the original string is equal to the reversed string
    return str === reversedStr;
};
console.log(isPalindrome(121)); // true
