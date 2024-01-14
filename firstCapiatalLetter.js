let string = prompt("Enter the string");
let newstring = string.charAt(0).toUpperCase();
let rem = string.slice(1);

console.log(`${newstring}${rem}`);
