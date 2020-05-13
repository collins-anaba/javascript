//creates a new array with all elements that pass the test implemented by the provided function
array.filter

const nums = [1,2,3,4,5,6,7,8]

const odds = nums.filter( n=> n % 2 === 1 )
const evens = nums.filter( n=> n % 2 === 0 )

//every tests whether all elements in the array pass the provided function. it returns a boolean value
const letter = [a,b,c,d,e,f,g]

letter.every(letter => {
    return letter.length === 1
})

letter.every(word => letter[0] === 'a')

// some is similar to every but returns if any of the array elements pass the test function 
const letter = [a,b,c,d,e,f,g]
letter.some(letter => letter[0] === 'a')

//sort method sorts elements by string
//sort pt.2 

// arr.sort(compareFunc(a,b))

// if arr.sort(compareFunc(a,b)) returns less than 0 
//// sort a before b

// if arr.sort(compareFunc(a,b)) returns 0
//// leave a and b unchanged w/ respect to each other

// if arr.sort(compareFunc(a,b))returns greater than 0 
//// sort b before a

const prices = [400.50, 3000, 99.99, 35.99, 12.00, 9500];
// REMEMBER THAT SORT() MUTATES THE ORIGINAL ARRAY!
// I'm using slice() to create a new copy, otherwise we would be sorting the same array 3 times:

// Default string sort :( 
const badSort = prices.slice().sort();

// Ascending Sort:
const ascSort = prices.slice().sort((a, b) => a - b);

// Descending Sort:
const descSort = prices.slice().sort((a, b) => b - a);

//reduce executes a reducer function on each element of the array, resulting in a single value
const nums = [1,2,3,4,5,6,7,8]
const product = nums.reduce((total, currentValue) => {
return total * currentValue
})

// total          currentValue
// 1              2
// 3              9
// 9              36

const grades = [87, 64, 96, 92, 88, 99, 73, 70, 64];

// One approach to find max using reduce:
// const maxGrade = grades.reduce((max, currVal) => {
//   if (currVal > max) return currVal;
//   return max;
// });

// A shorter version using Math.max:
const maxGrade = grades.reduce((max, currVal) => {
  return Math.max(max, currVal)
});
// Finding the min value using Math.min: 
const minGrade = grades.reduce((min, currVal) => (
  //using implicit return for variety's sake
  Math.min(min, currVal)
));

// max     currVal    return
// 87        64         87
// 87        96         96
// 96        92         96
/// etc.

// We can specify an initial value as the 2nd argument to reduce:
// arr.reduce(reducerFunction, initialValue)
const total = [10, 20, 30, 40, 50].reduce((sum, currVal) => {
  return sum + currVal;
}, 1000) //sum starts at 1000, then each element is added to it
