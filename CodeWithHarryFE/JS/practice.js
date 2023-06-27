// const prompt = require("prompt-sync")();
// var fname=prompt("Enter first name:");
// console.log("Your name is : ",fname);

// function greet(name,greeting="Good morning"){
//     console.log(greeting +" "+name);
// }

// let t_id=setTimeout(greet, 2000, "Robert");
// clearTimeout(t_id);

// function print_time(){
//     let dt=new Date();
//     document.getElementById('time').innerHTML=dt
// }

// setInterval(print_time, 1000);

// let dt = new Date(Date.now());
// let str_dt = dt.toString();
// let yr=dt.getFullYear();
// let date = dt.getDate();

// setInterval(displayTime,1000);
// function displayTime(){
//     document.getElementById("time").innerHTML= new Date();
// }


// let greet = ()=>{console.log("Good morning")}

// let sum = a=>a/2;
// let mul=(a,b)=>a*b;
// sum(10);
// mul(2,3);

// let obj1 = {
//     greeting:"Good morning!",
//     names:["harry","rajesh"],
//     speak(){
//         this.names.forEach((student)=>{
//             console.log(this.greeting+" "+student)
//         });
//     }
// }


// let js_obj=  {
//     name:"John",
//     age:34,
//     country:"UK"
// }

// let str_obj=JSON.stringify(js_obj);
// str_obj=str_obj.replace("UK","USA");
// js_obj=JSON.parse(str_obj);

// console.log(str_obj)


// ---------------------------------------------
// Profile Lookup:
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/profile-lookup

// Setup
const contacts = [
    {
      firstName: "Akira",
      lastName: "Laine",
      number: "0543236543",
      likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
      firstName: "Harry",
      lastName: "Potter",
      number: "0994372684",
      likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
      firstName: "Sherlock",
      lastName: "Holmes",
      number: "0487345643",
      likes: ["Intriguing Cases", "Violin"],
    },
    {
      firstName: "Kristian",
      lastName: "Vos",
      number: "unknown",
      likes: ["JavaScript", "Gaming", "Foxes"],
    },
  ];
  
  function lookUpProfile(name, prop) {
     var noContact=true;
     var noProp=true;
     var contact_value="";
      contacts.forEach((contact)=>{
        // check if name is an actual contact's firstName and the given property (prop) is a property of that contact.
        if(name==contact["firstName"]){
            noContact=false;
            if(contact.hasOwnProperty(prop)){
                noProp=false;
                // If both are true, then return the "value" of that property.
                contact_value=contact[prop]
                return true;
        } 
        }
    });
    // If name does not correspond to any contacts then return the string No such contact.
    if(noContact){
        return "No such contact";
    }

    // If prop does not correspond to any valid properties of a contact found to match name then return the string No such property.
    if(noProp){
        return "No such property";
    }

    if(contact_value){
      return contact_value
    }

  }
  
  console.log(lookUpProfile("Kristian", "lastName")); //should return the string Vos


// ---------------------------------------------
function freezeObj(){
  const MATH_CONSTANTS={
    PI:3.14
  };

  Object.freeze(MATH_CONSTANTS);
  MATH_CONSTANTS.PI=99;
  return MATH_CONSTANTS.PI;
}

const f_ffunc=()=>{
  const myVar="val";
  return myVar;
}


const curr_date= ()=>new Date()
const doubler= a=>a*2;

const increment_1 = (num1,adder=1)=> num1+adder;

function countArgs(...args){
  console.log("You have passed "+args.length+" args");
}

const sum = (...args)=>{
    let sum=0;
  for(num of args){
    sum+=num;
  }
  return sum;
}

const {name:userName, age:userAge} = user;
const {johnDoe:{age,email}}=user;

const person={
  name:"Taylor",
  sayHello:function(){
    return `Hello! ${this.name}`
  }
}


const person1={
  name:"Taylor",
  sayHello(){
    return `Hello! ${this.name}`;
  }
}

//ES6: Create Objects using class keywords

class SpaceShuttle{
  constructor(targetPlanet){
    this.targetPlanet=targetPlanet;
  }
}

const zeus=new SpaceShuttle('Earth');
console.log(zeus.targetPlanet);

// ---------------------------------

class Book{
  constructor(author){
    this.author=author;
  }
  set writer(updateAuthor){
    this.author=updateAuthor;
  }
  get writer(){
    return this.author;
  }
}

const novel1=new Book();
novel1.writer='Sameul';
console.log(novel1.writer);

// By convention write private variable with an underscore (_)

export const add = (a,b)=>a+b;
// OR
const add = (a,b)=>a+b;
export {add}

import {add} from './math_function.js'

import * as MyMod from './math_functions.js'

const myPromise = new Promise((resolve, reject)=>{
  if(condition){
    resolve("Resolved");
  }else{
    reject("Reason for rejection");
  }
})




const makeServerRequest = new Promise((resolve,reject)=>{
  let responseFromServer;
  if(responseFromServer){
    resolve('Server responded');
  }else{
    reject('Server not available');
  }
});


const myPromise2= new Promise((resolve, reject){
  let responsefromServer;
  if(responsefromServer){
    resolve("Server responded");
  }else{
    resolve("Server did not respond");
  }
});

myPromise2.then((result)=>console.log(result));