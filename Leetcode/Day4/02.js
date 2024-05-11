//2. Create a function that takes two arrays as arguments and returns a new array containing all elements from both arrays using the spread operator.

function concat(...args) {
    let arr3 = [];
    for (let i = 0; i < args.length; i++) {
      arr3 = arr3.concat(args[i]);
    }
    return arr3;
  }
  
  const Array1 = [1, 2, 3, 4, 5];
  const Array2 = [6, 7, 8, 9];
  console.log(concat(Array1, Array2));