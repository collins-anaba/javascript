



//async
//async functions always return a promise. 
// if the function returns a value the promise will ne resolved with that value. 
// if the function throws an exception, the promise will be rejected
//.then() is a method that returns a promise function. it takes up two arguments: success or failure

//promises
// a promise is an object representing the eventual completion or failure of an async operation
// a promise is a returned object to which you attach callbacks, instead of passing callbacks into a function

const getPromise = new Promise((resolve, reject)=> {
    //reject()
    //resolve()
})
.then() // will run if promise is resolved 
.catch() //will run if a promise is rejected
//there are various reasons why a promise may be rejected. example server is down. 

const fakeRequest = (url)=> {
    return new Promise((resolve, reject)=> {
        setTimeout(()=>{
        }, 5000)
    })
}