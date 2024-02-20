let date = new Date();
let crismasdate = new Date( date.getFullYear() , 11 ,25);

if(date.getMonth()==11 & date.getDate() > 25){
    crismasdate.setFullYear(getFullYear() + 1);
}
var one_day = 1000*60*60*24;


console.log( Math.ceil((crismasdate.getTime()  - date.getTime())/ (one_day)) + " remainning for Crismis" );

