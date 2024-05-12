//Create a promise that rejects after 1 second with an error message. Catch the error and log it to the console.

let prmiseRej = new Promise(function(resolve , reject){
    setTimeout(() => {
       let error = true;
       if(error){
        reject(new Error("Error message"));
       }
       else{
        console.log("It is Resolved");
        resolve()
       }
    }, 1000);
})

async function consumePromise(){
    try {
        const response = await prmiseRej
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromise();

