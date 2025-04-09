1.
console.log(a)  // undefined  //var is hoisted to the top and initialized as undefined.
var a = 20;


2.
// console.log(b)  //ReferenceError: Cannot access 'b' before initialization  //let is hoisted but not initialized – it's in the Temporal Dead Zone (TDZ).
let b = 34;


3.
function test(){
    if(true){
        var x = 10
        let y = 20
        let z = 30
    }

    console.log(x) // 10
    console.log(y) // ReferenceError: y is not defined
    console.log(z) //// ReferenceError: z is not defined
}

// test()


4.
   var q = 20
   var q = 34
   console.log(q)  //34


5. 
//   let w = 1;  SyntaxError: Identifier 'w' has already been declared
//   let w = 2;
//   console.log(b);


6. 
//   const c = 5;
//   c = 10;
//   console.log(c);  //TypeError: Assignment to constant variable.


7.
  const obj = {name:"Mike"}
  obj.name = "John"
  console.log(obj.name)


8. 
   for(var i = 0; i < 3; i++){
    setTimeout(() => console.log(i), 1000) //var is not block-scoped – the same i is shared. 3, 3, 3
   }


9.  
   for(let i = 0; i < 3; i++){
    setTimeout(() => console.log(i), 1000)  //let creates a new binding for each loop iteration. //0, 1, 2
   }


10. 
  {
    // console.log(a); // ReferenceError: Cannot access 'a' before initialization // beacause a inside TDZ
    let a = 10;
  }


11. // Variable Shadowing
   let s = 30
   {
    let s = 35
    console.log(s)  //35
   }
   console.log(s) //30


12. 
  
  
  

  
   