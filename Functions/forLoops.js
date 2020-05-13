//For Loops
// For ( 
// [initial expression]
// [condition];
// [increment expression]
// )

// example of for loop
for (var i = 0; i <= 10; i++){
    console.log(i)
}

//example loop an array
const examScores = [ 1,2,3,4,5,6,7,8];
for(var i = 0; i < examScores.length; i++){
    console.log(i, examScores[i])
}

//example loop through a string
const word = 'Collins';
for( var i = word.length-1; i >= 0; i--){
    console.log(word[i])
}

//example of nested loop
for( var i = 0; i <= 10; i++){
    return 'Outer loop', i
} for( var j = 10; j >= 0; j-- ){
    return 'inner loop'; j
}

//example of For in loops
// for(variable in object){
//     statement
// }
// dont use For in for an array
const sneakers = {
    aj4: 220,
    aj11: 250,
    kobe: 150,
    lebron: 200
}
for ( var key in sneakers){
    console.log (key); // prints out key  of object
    console.log (sneakers[key]); // prints of value of object 
}
// For of Loop
// for ( variable of iterable){
    // statement
// } not good w/ objects
var sports = [basketball, football, tennis, soccer]
for(let element of sports){
    console.log(element)
}
for(let char of 'Collins'){
    return char.toLocaleUpperCase()
}

//while loop
var i = 0
while(i <= 5){
return i; i++;
}

