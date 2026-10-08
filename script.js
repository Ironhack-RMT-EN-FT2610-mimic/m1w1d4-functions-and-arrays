console.log("Testing")


function myFunction ( /* some optional parameters */) {
  // the code to run every time the function is called

  //  optional return
}
myFunction( /* optional arguments */ )

function sayHello( firstName ) {
  // let firstName = "..." the value coming from the argument in the function invocation.
  if (firstName) {
    console.log(`Hello ${firstName}!`)
  } else {
    console.log("Hello Stranger!")
  }
}

sayHello( "Bob" )
sayHello( "Sarah" )
sayHello( "Anna" )
sayHello( "Angel" )
sayHello( )


// Return keyword

function addNumbers(num1, num2) {
  // every parameter or variable created inside a function ONLY lives inside the function.
  let sum = num1 + num2
  console.log(sum)
  return sum
}

// function addThreeNumbers(num1, num2, num3) {
//   let sum = num1 + num2 + num3
//   console.log(sum)
//   return sum
// }

let total1 = addNumbers(4, 7)
console.log(total1)

let total2 = addNumbers(15, 4)
console.log(total2)

let finalTotal = addNumbers(total1, total2)
console.log(finalTotal)



// Example:


let staff1 = "simi"
let staff2 = "daniel"
let staff3 = "julie"

function capitalize(string) {

  let stringFirstCharCap = string[0].toUpperCase()
  let stringRestOfChars = string.slice(1)
  let stringCap = stringFirstCharCap + stringRestOfChars
  return stringCap

}

let staff1Cap = capitalize(staff1)
let staff2Cap = capitalize(staff2)
let staff3Cap = capitalize(staff3)

console.log(`Our amazing staff is comprised by: ${staff1Cap}, ${staff2Cap} and ${staff3Cap}`)

//advanced example without variables
console.log(`Our amazing staff is comprised by: ${capitalize(staff1)}, ${capitalize(staff2)} and ${capitalize(staff3)}`)


// Ways of creating a function

function functionDeclaration(  ) {
  // code to execute
}

const functionExpress = function(  ) {
  // code to execute
}

const arrowFunction = (  ) => {
  // code to execute
}

// if the function only has one line, we can write it like this:
const shortArrowFunction = () => console.log("something")

// an anonymous functions (will be used later)
// () => console.log("something")



// ARRAYS

let someArray = ["hello", "bye", 50, true, undefined, null, [40, 10], { name: "bob" }, function() {/* ... */}]

console.log(someArray)



let cities = [ "Zaragoza", "Berlin", "Barcelona", "Caracas", "Lima", "Tokyo" ]

console.log(cities)

// first city
console.log(cities[0])

// first char of first city
console.log(cities[0][0])
console.log(cities[0].slice(0,1))

// last city
console.log(cities[cities.length - 1])

// first char of last city
console.log(cities[cities.length - 1][0])

// last char of the last city
let lastCity = cities[cities.length - 1]
let lastCharLastCity = lastCity[lastCity.length - 1]
console.log(lastCharLastCity)

// arrays methods

console.log(cities.indexOf("Caracas")) // 3
let indexOfCaracas = cities.indexOf("Caracas")


console.log(cities.indexOf("Miami")) // -1

console.log(cities.includes("Miami")) // false

let firstTwoCities = cities.slice(0, 2)
console.log(firstTwoCities)


// Mutability

// string are inmutable data
let simpleString = "hello"

console.log(simpleString[0])

simpleString[0] = "H" // JS ignores this actions
// simpleString = "Hello"

console.log(simpleString)

let friends = ["Ross", "Rachel", "Chandler", "Phoeby", "Monica", "Joey"]

console.log(friends)

// are are Mutable Data Types
friends[0] = "Mike"

console.log(friends)

let twoFriends = friends.slice(1, 3)
console.log(twoFriends)

console.log(friends)

// Methods that DO mutate the original data

let elementRemoved = friends.pop() // removes the last element of the array

console.log(elementRemoved)
console.log(friends)

let elementRemoved2 = friends.shift() // removes the first element of the array

console.log(elementRemoved2)
console.log(friends)

friends.push("Gunther") // always add as the last element

console.log(friends)

// .splice()

friends.splice(3, 0, "Robert", "Marcel", "Janice")
// 1st: index in which to do the modification.
// 2nd: amount of element to delete.
// 3rd and 4th: the element to add

console.log(friends)


// Activity

// create a function that takes an array of names and a single letter
// return the amount of names that started with that letter.

// ["leo", "emma", "isaac", "eloy", "james", "ankit"], i // 1
// ["leo", "emma", "isaac", "eloy", "james", "ankit"], e // 2
// ["leo", "emma", "isaac", "eloy", "james", "ankit"], x // 0
// ["andre", "de waal", "ainhoa", "tony", "jordi"], t // 1
// ["andre", "de waal", "ainhoa", "tony", "jordi"], j // 1

function nameCount(namesArray, letter) {

  // guard clauses
  if (namesArray.length === 0) {
    return "The array is empty. Check the arguments passed"
  }

  if (!letter) {
    return "The letter was not provided"
  }

  // variable to track the count
  let count = 0
  // for loop to interate over the names
  for(let i = 0; i < namesArray.length; i++) {
    // console.log(namesArray[i])
    let name = namesArray[i]
    // conditional name has the letter as the first one
    // startsWith to check if the letter is the first one of the string
    if ( name.startsWith(letter) === true ) {
      count++
      // console.log(count)
    }
  }
  return count
}

let test1 = ["leo", "emma", "isaac", "eloy", "james", "ankit"]
console.log( nameCount(test1, "i") ) // 1
console.log( nameCount(test1, "e") ) // 2
console.log( nameCount(test1, "x") ) // 0

let test2 = ["andre", "de waal", "ainhoa", "tony", "jordi"]
console.log( nameCount(test2, "t") ) // 1
console.log( nameCount(test2, "j") ) // 1

console.log( nameCount([], "x") )
console.log( nameCount(test1) )