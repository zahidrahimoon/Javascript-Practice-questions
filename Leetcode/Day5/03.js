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
async function consumePromise(){
    try {
        const response = await promiseTwo
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromise();
