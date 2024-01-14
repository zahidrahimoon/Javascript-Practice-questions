let number = prompt("Enter the number");
let temp = number;
let sum = 0;

while (temp > 0) {
  let digit = temp % 10;
  sum += digit ** 3;
  temp = parseInt(temp / 10);
}

if (sum == number) {
  console.log(`${number} is an Armstrong Number`);
} else {
  console.log(`${number} is not an Armstrong Number`);
}
