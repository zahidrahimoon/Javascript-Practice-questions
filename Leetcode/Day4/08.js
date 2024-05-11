//7. Implement a function that takes an unknown number of arrays as arguments and returns a new array with all the elements using the spread operator.

function mergeArrays(...args) {
    let newArr = [];
    for (let arr of args) {
        newArr = [...newArr, ...arr];
    }
    return newArr;
}

console.log(mergeArrays([1, 2], [3, 4], [5, 6]));
