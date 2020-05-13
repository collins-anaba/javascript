//example 1
if(1 === 1){
return ('its true')
}

//example 2
let rating = 3
if( rating === 3){
    return('you are alright')
}

// example 3
let num = 37;
if(num % 2 !== 0){
return ('Odd Number')
}

// else if statements

//example 1
let rating = 3
if( rating === 3){
    return('you are alright')
} else if (rating === 2){
    return ('you can do better')
}

// else statements
let rating = 3
if( rating === 3){
    return('you are alright')
} else if (rating === 2){
    return ('you can do better')
} else {
    return ('invalid rating')
}

//example 2
let highScore = 100;
let userScore = 200;
if(userScore>=highScore){
    return(`congrats you have the new high score of ${userScore}`);
    highScore = userScore
} else {
    return (` Good try you have the score of ${userScore}`)
}

//nesting conditionals
var password=''
if(password.length >= 8){
    if(password.indexOf('')=== -1){
        return('valid password');
    }
    else{
        return ('Passowrd is long enough but must not contain spaces')
    }
}
else {
    return ('password must be longer')
}