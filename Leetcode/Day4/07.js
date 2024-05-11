//6. Create a function that takes two objects as arguments and returns a new object with all the key-value pairs from both objects using the spread operator.

function mergeObjects(...args) {
    let mergedObj = {};
    for (let obj of args) {
        mergedObj = { ...mergedObj, ...obj };
    }
    return mergedObj;
}

const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };

console.log(mergeObjects(obj1, obj2)); 
