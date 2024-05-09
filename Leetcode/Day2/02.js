function map(arr, fn) {
    return arr.reduce((acc, curr, i) => {
        acc.push(fn(curr, i));
        return acc;
    }, []);
}

// Example 1
const arr1 = [1, 2, 3];
const plusone = function(n) { return n + 1; };
const newArray1 = map(arr1, plusone);
console.log(newArray1); // Output: [2, 3, 4]

// Example 2
const arr2 = [1, 2, 3];
const plusI = function(n, i) { return n + i; };
const newArray2 = map(arr2, plusI);
console.log(newArray2); // Output: [1, 3, 5]

// Example 3
const arr3 = [10, 20, 30];
const constant = function() { return 42; };
const newArray3 = map(arr3, constant);
console.log(newArray3); // Output: [42, 42, 42]
