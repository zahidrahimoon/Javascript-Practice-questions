function addStrings(num1, num2) {
    let carry = 0;
    let result = [];
    
    let i = num1.length - 1;
    let j = num2.length - 1;
    
    while (i >= 0 || j >= 0 || carry > 0) {
        let digit1 = i >= 0 ? parseInt(num1[i]) : 0;
        let digit2 = j >= 0 ? parseInt(num2[j]) : 0;
        
        let sum = digit1 + digit2 + carry;
        carry = Math.floor(sum / 10);
        
        result.push(sum % 10);
        
        i--;
        j--;
    }
    return result.reverse().join('');
}

let num1 = "25";
let num2 = "5";
console.log(addStrings(num1, num2));
