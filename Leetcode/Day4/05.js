function max(...args) {
    let maxVal = args[0];
    for (let i = 1; i < args.length; i++) {
        if (args[i] > maxVal) {
            maxVal = args[i];
        }
    }
    return maxVal;
}

console.log(max(5, 7, 2, 10, 1)); 
