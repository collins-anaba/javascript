// && and
// || or 
// ! not

//&& example
let password = ''
if(password.length >= 8 && password.indexOf(' ') === -1){
    return "valid password"
} else {
return "invalid password"
}

let num = 3;
if(num >= 1 && num <= 10){
    return " number is between 1 & 10"
} else {
    return " please guess the number"
}


// ||  example

let age = 76 ;
if( age < 6 || age  >= 65) {
return 'you get in for for free'
}else {
    return " you must pay"
}

// ! example
let user = '';
if(!user ){
    return " not a user"
} 

var flavor = "watermelon"
if(!( flavor === "watermelon" || flavor === "grape")){
    return true
}