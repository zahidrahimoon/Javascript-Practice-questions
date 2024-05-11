//5. Write a function that takes an array of strings as an argument and returns a new array with the length of each string using the spread operator.

function arrstrfunc(...args) {
    let newArr = args.map(str => str.length);
    return newArr;
}

console.log(arrstrfunc("Hello", "World")); 
