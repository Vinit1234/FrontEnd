const prompt = require("prompt-sync")();
var fname=prompt("Enter first name:");
console.log("Your name is : ",fname);


- Value of Uninitialized Variables is undefined

- Operation on an undefined variable your result will be NaN.


const anAdjective = "awesome!";
let ourStr = "freeCodeCamp is ";
ourStr += anAdjective;


let myStr = "Bob";
//Error since strings are immutable
myStr[0] = "J"; 
myStr = "Job"; //Allowed

//Last char of a string
const firstName = "Ada";
const lastLetter = firstName[firstName.length - 1];

//  Find the Nth-to-Last Character in a String
const firstName = "Augusta";
const thirdToLastLetter = firstName[firstName.length - 3];


const arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14]
  ];
  
  const subarray = arr[3];
  const nestedSubarray = arr[3][0];
  const element = arr[3][0][1];



Array functions: push("abc"), pop(), shift(), unshift("abc")

Variables which are declared without the let or const keywords are automatically created in the global scope



Equality, Strict equality and strict inequality operators

"3" ==  3  // true
3 === '3' // false

1 == '1' // true
3 !== '3' // true

// Logical AND / OR
if (num > 5 && num < 10) {}
if (num > 10 || num < 5) {}


// Multiple Identical Options in Switch Statements
let result = "";
switch (val) {
  case 1:
  case 2:
  case 3:
    result = "1, 2, or 3";
    break;
  case 4:
    result = "4 alone";
}


// Returning Boolean Values
function isEqual(a, b) {
  return a === b;
}



// JS Object

const ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};

console.log(ourDog.name); // Allowed


// Allowed
const testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};

const playerNumber = 16;  
// const player = testObj.16; //Error 
const player = testObj[16]; //Allowed

// ---------------------------------------
// For const object
const myDog = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};


myDog={} //Not allowed. Runtime error: TypeError: "myDog" is read-only
myDog.name="Happy coder"; // Allowed 

myDog.bark = "woof"; // Allowed. Adds new property "bark" to myDog

delete myDog.bark; // Allowed


// NOTE: Objects can be thought of as a key/value storage, like a dictionary.
// ----------------------------------------------

// To check if a property on a given object exists or not
object.hasOwnProperty(property); // returns true or false

// ----------------------------------------------
// Accessing Nested Objects

const ourStorage = {
  "desk": {
    "drawer": "stapler"
  },
  "cabinet": {
    "top drawer": { 
      "folder1": "a file",
      "folder2": "secrets"
    },
    "bottom drawer": "soda"
  }
};

ourStorage.cabinet["top drawer"].folder2;
ourStorage.desk.drawer;


====================================================

Tricky concepts of Objects:

let a=""
let b="  "
a==b; //false
a.trim()==b.trim();  //true
-----------------------------------------

// Check for a Null or Empty String

let myStr = null;
if (myStr === null || myStr.trim() === "") {
  console.log("This is an empty string!");
} else {
  console.log("This is not an empty string!");
}


const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

let id= 5439;
let prop= 'artist';
let value= 'ABBA';
records.id.prop //Incorrect
records[id].prop // incorrect
records[id][prop];

records[id][tracks].push(value); //Incorrect
records[id]["tracks"].push(value);


-------------------------------------------------------
// Very Important *****************************************
NOTE: return statement inside forEach loop doesn't return value from 
the function that wraps it.

Eg
function updateAndReturnMatch(array, value) {
  array.forEach(function(entry) {
      if (entry.someProp == value) {
         ++entry.count;
         return entry;
      }
  });
}

When we call function updateAndReturnMatch(), it returns undefined.
Here, entry is returned from function(entry) back to updateAndReturnMatch()
where entry is undefined. Therefore nothing ie, undefined is returned.
Instead define entry within the scope of updateAndReturnMatch() and 
update it within function(entry) and then return as follows:

function updateAndReturnMatch(array, value) {
  var foundEntry;
  array.forEach(function(entry) {
      if (entry.someProp == value) {
          foundEntry=entry;
         ++entry.count;
         return true; //breaks forEach loop
      }
  });
  return foundEntry;
}


---------------------------------------------
// Generates decimal random number b/w 0 and 1
Math.random();

//Generate random number b/w 0 and 20 (This means 20 is excluded)
Math.floor(Math.random() * 20);

//random whole number in the range from 0 to 9. (This means 9 is included)
Math.floor(Math.random() * 10);

// Generate Random Whole Numbers within a Range
Math.floor(Math.random() * (max - min + 1)) + min

--------------------------------------------------

parseInt("007"); // 7
parseInt("b7"); //NaN (Not a Number)

// Syntax
// parseInt(string, radix);
// The radix (is the base ) can be an integer between 2 and 36.
//The radix variable says that 11 is in the binary system, or base 2.
const a = parseInt("11", 2); //converts 11 of binary into integer ie, 3


--------------------------------------------------
// Ternary operators:

a > b ? "a is greater" : "b is greater or equal";

(a === b) ? "a and b are equal" 
    : (a > b) ? "a is greater" 
    : "b is greater";




