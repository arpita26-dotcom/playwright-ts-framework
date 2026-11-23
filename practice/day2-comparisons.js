console.log(5 === 5);            // truthy
console.log('5' === 5);          // falsy
console.log('5' == 5);           // truthy
console.log(0 == false);         // truthy
console.log(0 === false);        // falsy
console.log('' == 0);            // truthy
console.log(null === undefined); // falsy
console.log(null == undefined);  // truthy
console.log(Boolean('0'));       // falsy
console.log(Boolean(''));        // falsy