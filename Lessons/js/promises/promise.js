// promises are async
// Promise is a thing that surely will give out something

let data = []

const myFunc = async () => { /* new Promise(resolve =>{}) */
    let a = 1;
    return new Promise((resolve, reject) => {
        // there we need some condition
        // resolve when true
        if(a > 1)
            resolve([1, 2, 3])
        // reject when false
        else 
            reject('There is error')
        }
    )
}

// Promise.all()
// this helps us to do multiple promises currently
const promise1 = Promise.resolve(3);
const promise2 = 42; // This is not a promise, but it will be treated as one that resolves to 42
const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'foo');
});

Promise.all([promise1, promise2, promise3]).then(values => {
    console.log(values); // [3, 42, "foo"]
}).catch(error => {
    console.error(error);
});