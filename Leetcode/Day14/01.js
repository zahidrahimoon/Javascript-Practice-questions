function divide(dividend, divisor) {
    if (dividend === 0) return 0;
    if (dividend === -2147483648 && divisor === -1) {
        return 2147483647;
    }

    let isNegative = ((dividend > 0) !== (divisor > 0));

    let absDividend = Math.abs(dividend);
    let absDivisor = Math.abs(divisor);

    let count = 1;
    let result = 0;
    let base = absDivisor;

    while (absDividend >= absDivisor) {
        count = 1;
        base = absDivisor;
        while (base <= (absDividend >> 1)) {
            base = base << 1;
            count = count << 1;
        }
        result += count;
        absDividend -= base;
    }

    return isNegative ? -result : result;
}

console.log(divide(10, 3)); // Output: 3
console.log(divide(7, -3)); // Output: -2
console.log(divide(-2147483648, -1)); // Output: 2147483647
