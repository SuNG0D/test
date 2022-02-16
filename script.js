function makeMoreExciting(string) {
  return string + "!!!!"
}

var sentence = "time for a nap"
sentence = makeMoreExciting(sentence)

function yellIt(string) {
  string = string.toUpperCase()
  string = makeMoreExciting(string)
  console.log(string)
}

function yellIt(string) {
  string = string.toUpperCase()
  return makeMoreExciting(string)
}

console.log(yellIt("i fear no human")

function logANumber(someNumber) {
  console.log(someNumber)
}
_.times(10, logANumber)