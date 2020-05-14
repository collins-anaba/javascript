let day = 3;

if( day === 1){
    return('monday')
} else if (day === 3){
    return true
}

switch(day){
    //if day is 1
    case 1:
    // return monday
    console.log('Monday');
    // break allows for each case to be tested independently
    break;
    //if day is 2
    case 2:
    // return tuesday
    console.log('Tuesday');
    // break allows for each case to be tested independently
    break;
    //if day is 3
    case 3:
    // return wednesday
    console.log('Wednesday');
    // break allows for each case to be tested independently
    break;
    //if day is 4
    case 4:
    // return thursday
    console.log('Thursday');
    // break allows for each case to be tested independently
    break;
    //if day is 5
    case 5:
    // return friday
    console.log('Friday');
    // break allows for each case to be tested independently
    break;

    // default means else if
    default:
        console.log('invalid day')
}