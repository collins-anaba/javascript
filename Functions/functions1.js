//default parameters
// The old way of adding a default value:
// function multiply(x, y) {
//   if (typeof y === 'undefined') {
//     y = 1;
//   }
//   return x * y;
// }

// A slightly shorter version:
// function multiply(x, y) {
//   y = typeof y === 'undefined' ? 1 : y
//   return x * y;
// }

// The new super clean way of adding defaults!
//if y has no defined value then y = 1
function multiply(x, y = 1) {
    return x * y;
  }
  multiply(3, 4); //12
  multiply(3); //3
  
  // Another example!
  // const greet = (person, greeting = 'hi') => {
  //   console.log(`${greeting}, ${person}!`)
  // }
  
  // Default value of an array:
  // const blah = (x, y = [1, 2, 3]) => {
  //   console.log(x, y);
  // }
  
  // Multiple default values are possible, but rare
  // const greet = (person, greeting = 'hi', punctuation = '!') => {
  //   console.log(`${greeting}, ${person} ${punctuation}`)
  // }


  //spread in a function call
function giveMeFour(a, b, c, d) {
  console.log('a', a)
  console.log('b', b)
  console.log('c', c)
  console.log('d', d)
}

const colors = ['red', 'orange', 'yellow', 'green']

// Without spread:
giveMeFour(colors);
// a ["red", "orange", "yellow", "green"]
// b undefined
// c undefined
// d undefined

// WITH SPREAD!!!
// Values are passed as separate args:
giveMeFour(...colors);
// a 'red'
// b 'orange'
// c 'yellow'
// d 'green'

//We can also spread strings!
giveMeFour(...'GOAT');
// a G
// b O
// c A
// d T

//spread in array literals
const cephalopods = ['dumbo octopus', 'humboldt squid', 'flamboyant cuttlefish'];

const gastropods = ['giant african snail', 'banana slug', 'variable neon slug'];

const cnidaria = ['fire coral', 'moon jelly'];


const mollusca = [...cephalopods, ...gastropods]
//["dumbo octopus", "humboldt squid", "flamboyant cuttlefish", "giant african snail", "banana slug", "variable neon slug"]

const inverts = [...cnidaria, ...gastropods, ...cephalopods]
//["fire coral", "moon jelly", "giant african snail", "banana slug", "variable neon slug", "dumbo octopus", "humboldt squid", "flamboyant cuttlefish"]

const cephCopy = [...cephalopods];
//["dumbo octopus", "humboldt squid", "flamboyant cuttlefish"]

// spread objects
const feline = {
    legs: 4,
    family: 'Felidae'
  };
  
  const canine = {
    family: 'Caninae',
    furry: true,
    legs: 4
  };
  
  const dog = {
    ...canine,
    isPet: true,
    adorable: true
  }
  //{family: "Caninae", furry: true, legs: 4, isPet: true, adorable: true}
  
  const houseCat = {
    ...feline,
    isGrumpy: true,
    personality: 'unpredictable'
  }
  //{legs: 4, family: "Felidae", isGrumpy: true, personality: "unpredictable"}
  
  const catDog = {
    ...canine,
    ...feline
  }
  //{family: "Felidae", furry: true, legs: 4}
  
  //Order matters! Legs will be 3 here, because we set it AFTER spreading canine.
  const tripod = {
    ...canine,
    legs: 3,
  }
  //{family: "Caninae", furry: true, legs: 3}
  
  const catDogClone = {
    ...catDog
  }
  
  const random = [...'hello', {
    ...catDog
  }]