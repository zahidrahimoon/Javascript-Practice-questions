let number = prompt("Enter the number");
let temp = number;
let sum = 0;
for(let i=0; i<number; i++){
    let temp =i;
    let sum = 0;
    let noofDigit =i.toString().length;
while (temp > 0) {
  let digit = temp % 10;
  sum += digit ** noofDigit;
  temp = parseInt(temp / 10);
}

if (sum == i) {
  console.log(i);
}
}
