let promise1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promise 1 resolved'), 1000);
});

let promise2 = new Promise((resolve, reject) => {
    setTimeout(() => reject('Promise 2 rejected'), 2000);
});

let promise3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promise 3 resolved'), 3000);
});

Promise.all([promise1, promise2, promise3])
    .then((results) => {
        console.log(results);
    })
    .catch((error) => {
        console.error('One of the promises rejected:', error);
    });
