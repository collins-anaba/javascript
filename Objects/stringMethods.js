// strings are indexed
// .length (method) counts the number of characters in a string 


//string methods
// Converts all the alphabetic characters in a string to uppercase.
str.toUpperCase()
// Converts all the alphabetic characters in a string to lowercase.
str.toLowerCase()
// Removes the leading and trailing white space and line terminator characters from a string.
str.trim()
// you can connect methods together
str.trim().toUpperCase
// The substring to search for in the string
// Returns the position of the first occurrence of a substring
// -1 returns the value in the string that is not found
str.indexOf()
// The index to the beginning of the specified portion of stringObj.
// Returns a section of a string.
// 0 indicates where to begin the slice and 1 indicates where to end the slice
str.slice(0,1) 
// A string to search for.
// Replaces text in a string, using a regular expression or search string.
str.replace()