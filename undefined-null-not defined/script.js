1. 
   console.log(a) //undefined
   var a = 10


2. 
   let c;
   let b = null;
   console.log(typeof c); //undefined
   console.log(typeof b); //object


3. 
   console.log(undefined == null);  // true // loose equality: both represent "no value"
   console.log(undefined === null); // false // strict equality: different types


4. 
   console.log(test)  // return whole function 
   function test(val) {
     console.log(val);
   }
   test();  // undefined


5.
   const obj = { name: "Alex" };
   console.log(obj.age); // undefined //if you find something that is not inside object


6. 
    



