let str = "Java";

function checkJavaScript(str){
    if(str.substring(4, 9) === "Script"){
        return str.substring(0, 4) + str.substring(9);
    }
    else{
        return str;
    }
}

console.log(checkJavaScript("javascript")); 
console.log(checkJavaScript("JavaScript")); 