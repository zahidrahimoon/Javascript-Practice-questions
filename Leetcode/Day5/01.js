let promiseOne = new Promise(function(resolve , reject){
    setTimeout(function(){
        console.log("Promise One Resolved");
        resolve();
    },1000)
})
promiseOne.then(function(){
    console.log('This is resolve');
})