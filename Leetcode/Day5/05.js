//Create a chain of three promises. The first resolves after 1 second, the second after 2 seconds, and the third after 3 seconds. Each promise should log its index (1, 2, 3) when resolved.
new Promise(function(resolve, reject) {
    setTimeout(function() {
        console.log("Promise 1 Resolved");
        resolve();
    }, 1000);
}).then(() => {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            console.log("Promise 2 Resolved");
            resolve();
        }, 2000);
    });
}).then(() => {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            console.log("Promise 3 Resolved");
            resolve();
        }, 3000);
    });
});
