// we can nest conditionals inside conditionals
let password = ''
if(password.length >= 8){
    if(password.indexOf(' ') === -1){
        return "valid password"
    } else {
        return " password is long enough, but cannot contain spaces"
    } 
} else {
return "password must be longer"
}
