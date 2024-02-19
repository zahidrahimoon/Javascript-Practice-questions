function rotateString(str) {
    let char = str.split('');

    let newChar = char.pop();
    char.unshift(newChar);

    return char.join('');
}

let string = 'w3school';

for (let i = 0; i < string.length; i++) {
    string = rotateString(string);
    console.log(string);
}
