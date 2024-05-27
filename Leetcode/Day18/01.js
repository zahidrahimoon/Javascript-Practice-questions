//valid paranthasis
var isValid = function(s) {
    const stack = [];
    const matchingBracket = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (let char of s) {
        if (matchingBracket[char]) {
            if (stack.pop() !== matchingBracket[char]) {
                return false;
            }
        } else {
            stack.push(char);
        }
    }

    return stack.length === 0;
};
