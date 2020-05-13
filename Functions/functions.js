// write a function to find the average value in an array of numbers
function avg(arr){
    let total = 0;
    for(let num of arr){
        total += num;
    }
let result = total / arr.length;
return  result
}

// write a function which checks to see if a given sentence contains every letter of the alphabet. make sure you ignore casing
function isPangram (sentence){
 let lowerCased=   sentence.toLowercase()
for (let char of 'abcdefghijklmnopqrstuvwxyz'){
    if(lowerCased.indexOF(char) === -1){
        return false
    }
}
return true;
} 

// write a getCard function which returns a random playing card object
function getCard(){
    
}

//forEach
const numbers = [1,2,3,4,5]
numbers.forEach(function(num){
    console.log(n*3);
})

//Map creates a new array w/ the results of calling a callback on every element in the array
const numbers = [1,2,3,4,5]

const doubles = numbers.map(function(num){
    return num * 2
})

const getTableData = (req, res, db) => {
     db.select('conversation_id', 'message_id')
    .from('Schema.TableName')
    .limit(5)
    .then(items =>{
        for (var key in items){
        if(items.length === req.params.select){
            res.json(utils.prepareSearchResponse(items))
        }else {
            res.json({dataExists: 'false'})
        }}
    })
    .catch(err => console.log(err))
}