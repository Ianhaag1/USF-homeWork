//alert("THIS FILE WORKS PROPERLY, IF THIS DOES NOT SHOW THIS FILE IS BROKE")
//console.log("This Shows Its Working")

// REMEMBER THAT DOM IS DOCUMENT OBJECT

// document.getElementById = find a specific element in the HTML file. 
// Capitalization matters
// This gets the first matching id
// the kind of object we get back will depend on what we select
// HTMLDivElement vs HTMLParagraphElement (these are 2 different objects)

//document.getElementsByTagName 
// This accepts a string which is the name of an element inside of the dom
// for example: document.getElementsByTagName('img') will grab the imgs on the HTML file
// const imgs = document.getElementsByTagName('img')

//document.getElementsByClassName

//querySelector
// selets a query in order to find stuff inside of the DOM

//        Commands to Manipulate the DOM
//querySelector
//querySelectorAll
//getElementsById
//getElementsByClassName
//getElementsByTagName

//              INNER TEXT

//innerText is used to modify the text within a selected query

//              INNER HTML

//innerHTML manipulated the HTML code inside of the various querys such as p and h1 and h2 and ol and ul

//              Modifying Styling

// aside from the text or HTML of an element it is very common to want to change the inline style of an element

// using JavaScript youcan access any inline CSS property on an element using the *style* property

//              EXAMPLE 1
// const mainHeading = document.querySelector("h1") 
// mainHeading.style.color "black"
// h1.style.marginLeft = '400px'
// you can use css editors in JavaScript

// To change multiple elements one of the ways to do so is to use a for loop
// const listItens = document.querySelectorAll("li");
// for(let listItem of listItems){
    // listItemstyle.color = "red";
// }

// const allH3s = document.querySelectorAll('h3');
// for(let i = 0l i < allH3s.length; i++){
    // allH3s[i].style.color = 'pink'
//}

// const allH2s = document.getElementsByTagName('H2');
// for(let g2 of AllH2s){
    //h2.style.color = 'purple'
    //h2.style.fontSize = '80px'
//}

//              Manipulating Classes

// setAttribute("class") - this will override the class

// className - this will give you a string representation of the class

// classList - this will give you an array-like object to add, remove, or toggle classes

// To Create an HTML element, we can use the createElement function and pass in the name of the element

// newElement = document.createElement ('li') <- can be element

//The Element.prepend() method inserts a set of Node objects or string objects before the first child of the Element. String objects are inserted as equivalent Text nodes.

//              REMOVING ELEMENTS

// const removeMe = document.querySelector()
// ul.removeChild(removeMe)

//           CHILD/PARENT/SIBLING ELEMENTS

// parentElement access the parent element of an element

// .children will select the child elements of an element


//             NODES VS ELEMENTS

// with some of these finder methods we will see that we do not always get back an HTML element and sometimes we get back a text node


//            JAVASCRIPT EVENTS

// DOM events are “actions” that occur as a result of something the user or the browser does.

//We can use JavaScript to execute code when these kinds of “events” happen.

// event examples are: clicking on something, hovering over something, pressing certain keys, typing in commands, when the DOM has loaded, when a form is submitted

//             EVENT LISTENERS 

// addEventListener (.addEventListener)
// const h1 = document.querySelector("h1");
// h1.addEventListener("click", function(){
// console.log("you just clicked the h1 element");
//})

// event listeners are used constant to make a function happen when an event occurs

//            LOAD EVENTS

// A Gotcha - Waiting for the DOM to load
// if you are trying to access properties in the DOM before the web page has loaded - IT WONT WORK

// This becomes an issue if you put <script> tags in the <head> before the DOM has loaded

//            USE DOMContentLoaded
// document.addEventListener("DOMContentLoaded",function(){
    //place code here
//})

//             EVENT OBJECT

// inside of the callback to addEventListener, we get access to a special object as a parameter - the event object

// things inside of the event object: target, pageX/pageY, keys pressed

// preventDefault() - a function used to preven the default behavior of the event

//              MULTIPLE EVENTS

// To use multiple events typically make a loop
// for(let btn of removeButtons){
    //btn.addEventListener('click', function(){
        
 //   })
//}

//              EVENT DELEGATION

// the idea behind event delegation is that we make a parent element the delegate

// we attach a single event listener to the parent or delegate element and then if the event happens inside a child element we can access that child using event.target

//              DATA ATTRIBUTES

// when creating elements and HTML pages it is very common that you might want to add some metadata or additional info about elements

// these are not things that the user should see, but accessible info in CSS and JS

// instead of placing this in an id or class, we can create custom attributes called data attributes

// these attributes start with data and then anying you would like, you can read them easily in CSS and Javascript

//              LOCAL STORAGE (API)

// localStorage is a mechanism for storing information in the browser for a specific domain

// The most important thing o remember is tht all of your keys in localStorage and sessionStorage     >>MUST BE STRINGS!<<

//localStorage stores everything as strings - set keys as strings

// Set the localStorage using setItem

// EXAMPLE localStorage.setItem("firstName", "COLT")
// localStorage.setItem("Favorite Number", 33);
// localStorage.setItem("hasChickens", true);
// localStorage.setItem('catname','blue');

// Retrieve an item in localStorage using getItem

// localStorage.getItem("firstName")

// Remove a single property using removeItem

// localStorage.removeItem("firstName")

//         LOCAL STORAGE WITH OBEJECTS

// in order to get back the original data type, convert arrays to a special string format called JSON

// JSON (JavaScript Object Notation) is a lightweight data-interchange format. It is easy for humans to read and write and it is easy for machines to parse and generate.

// JS has built-in JSON object, and there are two methods used to cnvert JS data into JSON and to parse JSON strings into JS

// JSON.stringify - converts JS to JSON
// JSON.parse - parses a string as JSON

//                      WINDOWS TERMINAL

// terminal is an application that gives us a command line interface to interact with the computer


//                      SHELL OF TERMINAL

// the shell is the program which is actually processing commands and returns outputs

// most shells manage foreground and background processes.

//           WINDOWS SUBSYSTEM       W S L
// folder structure

// the first thing to learn with WSL is moving through file systems using PWD and LS

// LS stands for list
// LS is going to list the files of the selected directory

// CD means change directory

// if we want to move up a directory we us CD and if we want to move into a directory WE SPECIFY THE NAME OF THE DIRECTORY

// cd Desktop should move into your desktop directory

// you can type cd followed by a directory or PATH

//                  ABSOLUTE AND RELATIVE PATHS
// a path is a way to reach a fale or folder

// when specifying a path starting from the root directory / we can that an absolute path (pwd)

// FLAGS can change and even enhance commands and are added using a - (dash) after the command

// flags are usually represented by a single uppercase and lowercase letters

// with the LS command we can pass in the -a flag to list 'all' files (including hidden files and folders)

// GIT is a tool that allows devs to track versions of their code overtime

// touch is a command that creates a post?

//                      GIT init and Status

// init initializes a new git repository
// git init is an empty folder


// git add =  save modified files so that they will be included in the next commit 
// once we eare statisfied with the work of a file in our staging area we commit it to the local repository
// we need to include a commit message that sumarizes the changes that were made in that commit
// the message is connected to the commit with the !!-m flag!! 
// example = git commit -m "summary of this commit"
// the staging area is when we move a modified file to the staging area, we are preparing  to commit the state of the file to the next point

//                      GIT BRANCHING

// When making an initial commit in a new git repository, a branch named MASTER is generated automatically

// to create a new branch use the syntax: GIT CHECKOUT with the -b flag (this will create branch)

//                  Deleting Branches
// Branches are typically deleted after adding them to the main codebase
// to delete the branch use = git branch -d NAME_OF_BRANCH

//              Merging Branches
// with a branch workflow, typically create a new branch for something we are working on (new feature, redesign, etc)

//              Merge Conflicts
//To merge with the master use: git merge
// depending on the historys of the commits previous to merging this will either be a: FAST FORWARD MERGE OR A RECURSIVE MERGE

// Fast Forward merge is when GIT can easily tell when the commits happened and 'put' one set of commits on top of another chronically

// another common issue is when changes are commited to the same file from two different branches.

// if two developers are working on the same file the code is often not going to sync up proerly

//                                                          TESTING USING JASMINE

// to test in Jasmine you will have to add .test
// you also have to add the script to the HTML file

// EXAMPLE main.js = main.test.js (this will allow you to test in jasmine)

// TYPES OF ERRORS

// Syntax errors: Syntax errors occur when there is a mistake in the code's syntax, such as a missing or misplaced semicolon, parentheses, or curly brace. These types of errors are usually caught by the compiler or interpreter, and the code will not run until the syntax errors are fixed.

//Runtime errors: Runtime errors occur when the code runs and encounters an unexpected condition, such as trying to divide by zero, accessing an array element that does not exist, or passing an incorrect type of argument to a function. These types of errors can be harder to detect and fix, as they may not occur until the code is executed.

//Logical errors: Logical errors occur when the code runs without producing any errors but does not produce the expected output. These types of errors can be caused by incorrect assumptions, flawed algorithms, or incorrect usage of variables and operators.

//Semantic errors: Semantic errors occur when the code runs without producing any errors and produces output, but the output is incorrect. These types of errors are caused by incorrect program logic or incorrect assumptions about the input data.

//Compilation errors: Compilation errors occur when the code is compiled, and the compiler is unable to create an executable program due to errors in the code.

//                  CALL BACK FUNCTIONS

//array.forEach(element => {});

// A callback is a function to execute on each element. 

// function holler(){
    // console.log('hey you');
//}

// const whisper = function(){}

//              FOREACH

// ARRAY METHODS THAT EXPECT A FUNCTION AS AN ARGUMENT

// forEach loops through an array, runs a callback function for each value in the array, and always returns undefined

//myForEach([4,5,6], function(){})

//           MAP FUNCTION ARRAY

// MAP creates a new array, iterates through an array, runs a callback function for each value in the array, and thhen adds the results of that callback function

// const numbers = [21, 35, 52, 66, 22];

// numbers.map(function(num){
//    return num * -1;})

//          FILTER FUNCTION ARRAY

//Filter creates a new array at the very beginning, loops through the array, runs a callback function on each value in the array, if the callback function returns true, that value is pushed into the new array, if the callback function returns false that value is not included in the new array. 

// words.filter(function(word){
    //word.length >= 20){
        //return true
    //}
//})

// words.filter(function(w){
    //w[0]==='u' || w[0]==='c';
//})

// const isVowel = function(char){
    //'aeiou'.indexOf(char) !== -1
//}

//          MAP AND FILTER CAN BE USED TOGETHER



    //SOME

// Some iterates through an array, runs a callback on each value in the array, and if the callback returns true for at least one single value it all RETURNS TRUE

//      EVERY
// every iterates through an array, runs a callback on each value in the array, if the callback returns false for any single value, return false



// FIND AND FIND INDEX

// find iterates through an array, runs a callback on each value in the array, if the callback returns true at any point it returns the value in the array

// ie. 
// const = scores
//scores.find(function(score){
//    return score > 75
//})

//                          REDUCE

// whenever reduce is used in a callback function, whatever is returned becomes the new value of the accumulator



//                  ES2015 NEW STUFF

//                  ECMA script

// ECMAscript is the standard for the JS language, it started during the 'browser wars' between microsoft and netscape

// ECMA standards organization for information and communication systems 

//                  THE SPEC OF NEW RELEASES

// Before 2015 Javascript used var as the primary variable. Now let is used as a temporary or flexible variable and const means a consistent variable that cannot be changed. ]

// ARROW FUNCTIONS ARE NOT SUPPOTED ON WINDOWS EXPLORER... 

// ARROW FUNCTIONS WILL NOT REPLACE A FUNCTION DECLARATION BUT WILL REPLACE A FUNCTION VARIABLE 

// CONST ADD = (X,Y) => {}

// arrow functions are shorthand for function expressions
// they cannot be named and they only work as a function expression
// they are ideal for shortening callbacks.

// [1,2,3,4,5,6].reduce(max,currNum) => {
    //return math.max(max,currNum);
//}

//                  Arrow functions syntax

// arrow functions have an implicit return if you leave out the curly braces!! ****** 

// [1,2,3,4,5,6,7].filter(function(num){
    //return num % 2 === 0;
//})

// [1,2,3,4,5,6,7,8].filter((num) => num % 2 === 0); ****

// Concise syntax: Arrow functions are shorter and easier to read than traditional function syntax, especially for simple functions.

//Implicit return: If the function body is a single expression, arrow functions automatically return the result of that expression, without needing a return keyword.

//              ARROW FUNCTION GOTCHAS

// IF YOU WANT TO RETURN AN OBJECT USING ARROW FUNCTIONS MAKE SURE THE FUNCTION IS WRAPPED IN () OR IT IS ON MORE THAN ONE LINE

//              The Argument Object (REST AND SPREAD)

// in JS, every function created using the function keyword has access to a special keyword called arugments.

// arguments are not arrays they are ARRAY LIKE OBJECTS

// when three dots are part of a function definition we call the operator the "rest" operator

// the rest operator is the last parameter defined in a function and will evaluate to an array of all the additional arguments passed in.

// function displayArguments(...restOfArgs)

// const sumAll = (...values) =>{
    // return values.reduce(sum,num) => (sum+num)
//}

//                  SHORT HAND PROPERTY 

//                  Object Destructering

// const {var1, var2, var3} = input

// const [var1, var2] = input

// destructuring is to simplify objects and arrays so you do not have to type in the entire command when looking at an object/string

// function function({var1, var2}){
//    return var1 *+-/ var2
//}

//                  MAPS and SETS
// data structures are formats for efficiently collecting and storing data
// es2015 adds MAPS and SETS
// Hash Maps
// keys can be ANY data type
// SETS all values inside of a set are unique
//any type of value can exist in a set
// they are created using a new keyword
// exist in quite a few other languages.

//new Set([1,1,2,2,3,4]) // this should return {1,2,3,4}

//[...new Set("referee")].join("") // this returns ref


//                  OBJECTS REVIEWED

// object literals are used with {} (POJO(plain old javascript object))

// const color = teal
// const obj = {}
// obj.color = ''
// obj[color] =''

// a property that does not exist on an object will return undefined
 
//                  METHODS REVIEWED

// Remember you can add functions as a property in a object and that is called a method

//methods can be called in any object and can cause any function 

/*const rightTriangle = {
    a : 9,
    b : 12,
    printThis : function(){
        console.log(this);
    },
    getArea : function(){
        return this.a * this.b / 2;
    },
    getHypotenuse : function(){
        this.printThis();
        return Math.sqrt(this.a ** 2 + this.b ** 2);
    }
}; */

//                  CONSTRUCTOR FUNCTIONS   

// these are functions we call with new that will make us a object a 'new set instance' 

// cosnt t1 = new triangle 

//                  ARRAY.PROTOTYPE
// arrays are just an object that contain the functionality that contain the methods that every set will use

// Array.prototype.push(val){
 //   console.log (`so you want to add ${val}`)
//};

//                 CLASSES
// classes are a blueprint of functionality 

// class TriangleP{
 //   getArea(){
 //       const {a,b,c} = this;
 //       const s = (a,b,c) / 2;
 //       return Math.sqrt(s - a) * (s-b) * (s-c);
//
  //  }
 //   display(){
 //       console.log(`i am a triangle with sides ${a}, ${b}, ${c}`)
   // }
//}

//              JAVASCRIPT THIS FUNCTIONS
//              JAVASCRIPT .bind .call

/*
const cat = {
    name: 'Blue';
    breed: 'scottish fold';
    dance: function(dance){
        console.log(`mew I am ${this.name} and i enjoy ${dance}`);
    }
};

const bluesDance = cat.dance (this is the exact same function)

cat.dance('salsa');

*/

// when you call a function on nothing in javascript you actually just call it on the global object i.e. window

// in browser JS thats window 
// in NodeJS thats global

//                  EMCA STRICT MODE

//class Cat {
//    constructor(name,breed){
 //       this.name = name;
// //       this.breed = breed;
 //   }
 //   dance(danceType){
 //       console.log('this is', this);
  //  }
//}

// BABEL IS A TRANSCRIOBER

// sometimes you need to say "call this function on this object" that is what the function call() is used for 

// call is used when you need to call an input to your current function and/or object

//bind is when you pass in a value and is used when using THIS and it does not execute your function. 

// bind returns a new perma-bound function

//  const bDance = blue.dance;
// const boundDance = bDance.bind(blue);

// bind is a method on functions that returns a boundy copy of the function

// const x = var.obj.bind(value, 'filler')

// you can also bind arguments to functions. that will bake them into the function

// const applyCASalesTax = applySalesTax.bind(null, 0.0725);

// applyCASalesTax(50);

// function collectMonthlyFee(fee){
    // const remaining = this.total - fee;
    //this.total = remaining;
    //return this.name + 'remaining balance:' + remaining;
//}

//             ARROW FUNCTIONS AND THIS

// arrow functions do not make their own this

// const greeter = {
    //msg : 'i like chickens',
    // sayHi ; () => {
        //alert(this.msg);
    //},
    // waitAndGreet : function(delay){
        //setTimeout(function(){
            //alert('hello!');
        //}, delay)
        

  //  }
//}
                

//                      WHAT IS JQUERY

//  JQUERY IS A LIBRARY FOR:
// Manipulating the DOM
// Adding Event Listeners
// animating Elements
// Making HTTP Requests

// ----------------- YOU DO NOT NEED TO LEARN JQUERY!------


//                      HOW THE WEB WORKS!

// A network is a set of computers that can intercommunicate

// networks are made to share information

// the internet is an example of a network

// LAN is a local area network

// An IP adress is a unique address that can be used to identify a specific computer on a network

//Since IP address are just four numbers (0-255) we use hostnames instead. 

// Hostnames are just nicknames for a server (human readable)
// these are mapped into an IP address
//DNS stands for Domain Name Systems

// URL anatomy (universal resource locators)
// URLs are not exclusive to webpages
// a Query string provides extra information in search terms. multiple arguments are divided using \


// a server is a computer that provides functionality.

//A server is a computer program or device that provides a service to another computer program and its user, also known as the client. In a data center, the physical computer that a server program runs on is also frequently referred to as a server.

//What is a REQUEST
// the Method is GET
// Http Protocol version always 1.1
// resources URL that you want
// Headers

// response CODES!

// 200 = ok
// 301 = Your request is elsewhere
// 404 = not found
// 500 = server is having internal problems

// ACcept-Language is a way to ask for a preticular language

// ------------------------SETTING UP A SERVER-------------

//Just opening up an HTML file in a browser uses the File Protocol not HTTP
// some things will not work the same
//it is useful to start a simple HTTP server for testing!

// $python 3 -m http.server

// GET vs Post 

// GET: requests without side effects because it wont change server data
// typically arguents are passed along in the query string

// POST: requests with side effects because it can change the server data
// arguments are sent as body of the request
// some form submissions
// always do this if there is a side effect, sending mail, charging a card

//                            APIs 
