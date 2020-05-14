// method that turns an object or array into a string
JSON.stringify()

//method that turns JSON back to an object or array
JSON.parse()

//spread operator changes the elements into an array as individual separate arguments
function greeting (hi, hello,hey,sup){ {
  return  ('hi', hi)
  return  ('hello', hello)
  return  ('hey', hey)
  return  ('sup', sup)
}
}
var farewells = [
    'bye', 'see ya', 'peace', 'aight'
]

greeting(...farewells)

