let c=prompt("Enter the temperature c");
let C=prompt("Enter the temperature C");
let F=prompt("Enter the temperature F");
let f=prompt("Enter the temperature f");

f= c*(9/5) + 32;
F= C*(9/5) + 32;
c= (f - 32) * (5/9);
C= (F - 32) * (5/9);

if(f && F && c && C){
    console.log(f);
    console.log(F);
    console.log(C);
    console.log(c);
}
else{
    console.log("inavlid")
}

