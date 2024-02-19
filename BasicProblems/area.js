//Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7. 

function Area(a,b,c) {
    const s = (a+b+c) / 2;

    const area = Math.sqrt(s * (s-a) * (s-b) * (s-c));

    return area;
}
const a = 5;
const b = 9;
const c = 6;
console.log(Area(a,b,c));