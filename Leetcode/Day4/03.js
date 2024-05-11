//3. Write a function that takes an object as an argument and returns a new object with all the same key-value pairs using the spread operator.

function obj(object){
    let obj1 = { ...object };
    return obj1;
}

let objectt = {
   name: "Zahid",
   age: 18,
};

console.log(obj(objectt)); 
