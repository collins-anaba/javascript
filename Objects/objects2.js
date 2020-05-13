//adding functions to objects
//adding functions to objects they're called methods

const add = function (x,y){
    return x + y
}

const math = {
    add: function(x,y){
        return x + y
    }
}

//this 
//window is global scope in the browser
function sayHi(){
    return this
}