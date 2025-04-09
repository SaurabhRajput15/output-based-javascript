1.
console.log(a)  //undefined //var a is hoisted and initialized as undefined.
var a = 23


2.
// console.log(b); // ❌ ReferenceError : Cannot access 'b' before initialization
let b = 20;


3.
greet(); // "hello"
function greet() {
  console.log("Hello!");   //Function declarations are hoisted with their body.
}


4.
// sayHi(); // ❌ TypeError: sayHi is not a function
var sayHi = function() {
  console.log("Hi!");
};


5.
function test() {
    console.log(foo);  //undefined
    var foo = "Hello";
    console.log(foo);  //"Hello"
  }
test();


6.
var a = 1;

function foo() {
  console.log(a); //undefined
  var a = 2;
}

foo();  //Even though a is declared globally, inside the function, the var a declaration shadows the global a, and due to hoisting, var a is moved to the top of the function scope:


7.
function test() {
    console.log(x);  //ReferenceError: Cannot access 'x' before initialization
    let x = 5;
  }
test();
  

  


