let string = prompt("Please enter a string");
let length=string.length;
let msg="The given string is palindrome.";
    for(let i=0; i<length/2; i++){
        if (string[i]!=string[length-1-i]){
          msg="The given string is not palindrome.";
          break;
        }
    }
console.log(`${string} : ${msg}`);
