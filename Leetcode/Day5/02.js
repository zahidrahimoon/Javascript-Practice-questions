let promiseTwo = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false;
          if(!error){
             resolve({username: "Zahid" , age: 17 , Uni: "Dawood University" , Skills : "Frontend Development"})
          }
          else{
            reject("Error!");
          }
    }, 1000)
})
promiseTwo.then((user)=>{
    console.log("User is", user); 
    return user.username;
}).then((usrnme)=>{
    console.log(`Username of the User is ${usrnme}`);
}).catch(function(err){
    console.log(err);
});
