let string = prompt("Enter the string");
let newstring = string.split('');
let reverse = newstring.reverse();
let revstring = reverse.join('');

if (string === revstring) {
    console.log(`${string} is a Palindrome`);
} else {
    console.log(`${string} is not a Palindrome`);
}
