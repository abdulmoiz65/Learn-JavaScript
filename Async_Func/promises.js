// promises 


let success = true;

let promise = new Promise(function(resolve , reject){
    if (success) {
         resolve("i am successful");
    } else {
        reject("i failed to do ");
    }
})

promise
    .then((message) => {
        console.log("Success: " + message);
    })
    .catch((message) => {
        console.log("Failure: " + message);
    });


