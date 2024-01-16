let string = prompt("Enter the string");
let letter = prompt("Enter the letter");
let strlength = string.length;

let count = 0;

for (let i = 0; i < strlength; i++) {
    if (string[i] === letter) {
        count++;
    }
}

console.log(`${string} => ${letter} => ${count}`);
