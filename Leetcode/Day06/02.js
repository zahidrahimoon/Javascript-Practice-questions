function isAnagram(s, t) {
    // If lengths are different, they cannot be anagrams
    if (s.length !== t.length) {
        return false;
    }

    // Create character count maps
    let charCountS = {};
    let charCountT = {};

    // Count characters in the first string
    for (let char of s) {
        charCountS[char] = (charCountS[char] || 0) + 1;
    }

    // Count characters in the second string
    for (let char of t) {
        charCountT[char] = (charCountT[char] || 0) + 1;
    }

    // Compare character counts
    for (let char in charCountS) {
        if (charCountS[char] !== charCountT[char]) {
            return false;
        }
    }

    return true;
}

// Example usage
console.log(isAnagram("anagram", "nagaram")); // Output: true
console.log(isAnagram("rat", "car"));         // Output: false
