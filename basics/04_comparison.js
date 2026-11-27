// console.log(2 > 3);
// console.log(2 < 3);
// console.log(2 >= 3);
// console.log(2 <= 3);

const { captureOwnerStack } = require("react")


// console.log("1" > 2);
// console.log(1 < "2");

console.log(null > 1)
console.log(null < 2)
console.log(null <= 3)


console.log(undefined = 3)
console.log(undefined > 3)
console.log(undefined < 3)

// == and === performs differently .. == converts or assign .. but === checks the data type also
// also null and unidentified performs differently ..........


// ------------------------------------------------------------------******--------------------------------------------------------------------------------------------
// Stack (primitve) and Heap (non-premitive) Memory Types

// stack --> whhwnever you store smthing in stack you always get a copy of that .. and its generally immmutable ... cuz you are not getting the access of real data !!
// Heap --> whenever you store smthing in heap you always get the reference of Original data ..  and its generally mutable .. cuz you are getting acess of the real data !!
