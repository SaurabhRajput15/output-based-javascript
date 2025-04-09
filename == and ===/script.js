// null vs undefined
console.log(null == undefined); // true → loosely equal
console.log(null === undefined); // false → different types

// string vs number
console.log('5' == 5);   // true → '5' is coerced to number 5
console.log('5' === 5);  // false → string !== number

// empty array vs false
console.log([] == false);   // true → [] becomes '' → 0 → false
console.log([] === false);  // false → array !== boolean

// empty array vs 0
console.log([] == 0);   // true → [] becomes '' → 0
console.log([] === 0);  // false → array !== number

// array vs string
console.log([1,2] == '1,2');   // true → [1,2].toString() is '1,2'
console.log([1,2] === '1,2');  // false → array !== string

// object vs object
console.log({} == {});   // false → different references
console.log({} === {});  // false → same reason: objects are not equal by value
