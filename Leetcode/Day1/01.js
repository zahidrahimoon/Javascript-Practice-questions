//Write a function createHelloWorld. It should return a new function that always returns "Hello World"

function helloWorld() {
    return function () {
        return "Hello world";
    }
}

const helloWorldFunc = helloWorld();
console.log(helloWorldFunc());  
