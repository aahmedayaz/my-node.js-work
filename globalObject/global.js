console.log(global.atob)
console.log(globalThis.crypto)


// Browsers:
// In browsers, when you write JavaScript code outside of any function or block, it's in the global scope, except within ECMAScript modules.
// This means if you use var to declare a variable in this global scope, it becomes a global variable accessible from anywhere in your JavaScript code.

// This is the global scope in a browser
var myGlobalVar = "I'm global!";


// Node.js:
// In Node.js, the top-level scope of a module is not the global scope.
// If you use var to declare a variable at the top-level of a Node.js module, it becomes local to that module. It's not accessible outside of that module.

// This is the top-level scope in a Node.js module
var myLocalVar = "I'm local!";


// Examples of Global object in Nodejs:
// console, process, timers (setTimeout, setInterval), and modules like require.

// Examples of Global object in Browser:
// document, location, navigator, DOM manipulation methods (e.g., getElementById), and functions for user interaction (e.g., alert, confirm).