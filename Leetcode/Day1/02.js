function Counter(n){
    let count = n;
    return function (){
        currentCount = count;
        count++;
        return currentCount;
    }
}
let Counting = Counter(5);
console.log(Counting());
console.log(Counting());
console.log(Counting());
console.log(Counting());
console.log(Counting());