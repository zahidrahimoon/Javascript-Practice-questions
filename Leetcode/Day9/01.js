var lengthOfLastWord = function(s) {
    s = s.trim();
    let lastSpaceIndex = s.lastIndexOf(' ');
    return s.length - lastSpaceIndex - 1;
};

console.log(lengthOfLastWord("Hello World")); // Output: 5
console.log(lengthOfLastWord("   fly me   to   the moon  ")); // Output: 4
console.log(lengthOfLastWord("luffy is still joyboy")); // Output: 7
