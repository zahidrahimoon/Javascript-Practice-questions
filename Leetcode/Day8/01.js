//Problem: Write a function that takes a string as input and reverse only the vowels of a string.
//[LeetCode Problem #345](https://leetcode.com/problems/reverse-vowels-of-a-string/)

function reverseVowels(str) {
    let vowels = "aeiouAEIOU";
    let arr = str.split("");
    let i = 0;
    let j = arr.length - 1;
    
    while (i < j) {
        if (!vowels.includes(arr[i])) {
            i++;
        } else if (!vowels.includes(arr[j])) {
            j--;
        } else {
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            i++;
            j--;
        }
    }
    
    return arr.join("");
}

// Example usage:
console.log(reverseVowels("zahid"));  // Output: "zahod"
console.log(reverseVowels("hello"));  // Output: "holle"
console.log(reverseVowels("leetcode"));  // Output: "leotcede"
