1.//map
  const nums = [1, 2, 3, 4]
  const doubled = nums.map(num => num * 2)
  console.log(doubled)



2. //filter
  const value = [1, 2, 3, 4, 5, 6]
  const isEven = value.filter((val) => val % 2 === 0)
  console.log(isEven)


3. //reduce
   const arr = [1, 2, 3, 4, 5]
   const addArr = arr.reduce((acc, curr) => acc + curr, 0)
   console.log(addArr)


4. 
   const users = [
    { name: "Alice" }, 
    { name: "Bob" }
   ];

   const names = users.map(user => user.name)
   console.log(names)


5. 
  const user = [
    { name: "Alice", active: true },
    { name: "Bob", active: false },
    { name: "John", active: true },
    { name: "Bob", active: true}
  ];
  const activeUser = user.filter((activeUser) => activeUser.active)
  console.log(activeUser)
  
  const count = user.reduce((acc, user) => user.active ? acc + 1 : acc, 0);
  console.log(count)


6. 
  const array = [1, 2, 3];
  const result = array.map(num => {
    num * 2;
  });
  console.log(result);  //[undefined, undefined, undefined] if you not explicit return


7. 
    const anArray = [1, 2, 3, 4, 5];
    const newArray = anArray
                           .filter((num) => num % 2 === 0)
                           .map((num) => num * 2)
                           .reduce((acc, num) => acc + num, 0)
    console.log(newArray)


8.
    let counts = 0;
    const results = [1, 2, 3].map(num => counts += num);
    console.log(results);
    console.log(counts);

  
 9. 
   const companyUser = [
     { name: 'Alice', active: true },
    { name: 'Bob', active: false },
    { name: 'Carol', active: true }
  ];
  
  const activeUsers = companyUser.filter(u => u.active).map(u => u.name);
  console.log(activeUsers);
  

