const square = (x) => {
    return x * x;
}

const sum = (x,y) => {
    return x + y
}

const isEven = (num) => {
    return num % 2 === 0
}

//if you have one paramter you dont have to use parenthesis 

const square = n => {
    return n * n;
}

//examples of implicit returns
const square = n => (
    n*n)

    const square = n => n*n

const nums = [1,2,3,4]

const doubles1 = nums.map(n => {
    return n * 2
})

const doubles1 = nums.map(n =>  n * 2)

const parityList = nums.map((n)=> n % 2 === 0 ? 'even' : 'odd');
