let string =prompt("Enter the String");
let start =string.startsWith('Z');
let end =string.endsWith('d');

if(start==true  && end==true){
    console.log(`${string}  starts with Z and end with d`);
}
else if(start==true  && end==false){
    console.log(`${string}  starts with Z but not end with d`);
}
else if(start==false  && end==true){
    console.log(`${string} not starts with Z but end with d`);
}
else{
   console.log("Invalid");
}