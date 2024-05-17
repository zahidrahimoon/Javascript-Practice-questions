var strStr = function(haystack, needle) {
    // If needle is an empty string, return 0
    if (needle === "") {
        return 0;
    }
    
    // Use indexOf to find the first occurrence of needle in haystack
    let index = haystack.indexOf(needle);
    
    // Return the result
    return index;
};

// Example usage:
console.log(strStr("hello", "ll"));  // Output: 2
console.log(strStr("aaaaa", "bba"));  // Output: -1
console.log(strStr("", ""));  // Output: 0
console.log(strStr("hello", ""));  // Output: 0
console.log(strStr("mississippi", "issip"));  // Output: 4
