//Write a JavaScript program to remove a character at the specified position in a given string and return the modified string.
let string = "zara";
let positionToRemove = 0; 
let newString = string.slice(0, positionToRemove) + string.slice(positionToRemove + 1);

console.log(newString); 

