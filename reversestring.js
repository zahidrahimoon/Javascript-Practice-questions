let string = prompt("Enter the String");
let strlength = string.length;
let revstr = '';

for (let i = strlength - 1; i >= 0; i--) {
    revstr += string[i];
}

console.log(`${string} reverse will be ${revstr}`);
