var fibGenerator = function*() {
    let a = 0, b = 1;
    yield a; // Yield the first Fibonacci number
    yield b; // Yield the second Fibonacci number

    while (true) {
        const c = a + b;
        yield c;
        a = b;
        b = c;
    }
};
//yield is used within generator functions (defined with function* syntax) to pause the function's execution and return a value. This pause-and-resume functionality is what makes generators unique.

