// access index
colors[0]

//modifying arrays
let number = [1,2,3]
//how to add to the end of an array
number[color.length] = 4

//method to add an element to end of the array
// push changes the length of the array
number.push(5)

//method to removes the last element of an array and returns that element to you
// you don't specify the element just leave it blank
number.pop() 

//method to removes the first element of an array and returns that element to you
// you don't specify the element just leave it blank
number.shift()

//method to add an element to beginning of the array 
number.unshift(0)

//method determines whether an array includes a certain value among its entries, returning true or false as appropriate
number.includes(8)
if(number.includes(8)){
    return true
}

//indexOf method returns the first index at which a given element can be found in the array, or -1 if not present
number.indexOf(8)

// join method creates a string from an array. needs to empty
number.join()

// reverse method reverses a method.need to be empty
number.reverse()

//sort an array in place and returns the sorted array in alphabetical order if word strings. 
number.sort()

//returns the value of the first element in the array that satisfies the provided testing function
array.find

let nums = [1,2,3,4,5]

let num = nums.find(num=> {
    return num.includes(1)
})



