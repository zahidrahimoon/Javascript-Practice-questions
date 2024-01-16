let string =prompt("Enter the string");
let reg = /[aieou]/gi;
let vowels =string.match(reg);

if(vowels){
    console.log(`The vowels are ${string} are ${vowels.join(',')}`);
}
else{
    console.log(`There is no vowels in a ${string}`);  
}
