function createCounter(init){
     let count = init;
     return {
          increment: function(){
               count++;
               return count;
          },
          decrement: function(){
               count--;
               return count;
          },
          reset: function(){
               count = init;
               return count;
          }
     }
     }

const calls = ["increment" , "decrement" , "reset"];
const counter1 = createCounter(5);
const result1 = calls.map(calls => counter1[calls]());
console.log(result1);