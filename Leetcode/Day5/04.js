//Create a promise that resolves after 1 second and logs "Promise resolved" to the console.
let PromiseOne = new Promise(function(resolve , reject){
    setTimeout(function(){
        console.log("Promise Resolved");
        resolve();
    },1000);
})