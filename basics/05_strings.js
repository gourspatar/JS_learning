
// const firstName = "Gour "
// const middleName = "Sundar "
// const lastName = "Patar "

// console.log(firstName + middleName + lastName)

// but these are old methods also not very prductive and dynamic .. !!

// console.log(`My First name is ${firstName} middle name is ${middleName} last name is ${lastName}`);

// This is the modern way and it's productive and dynamic .. as we can do many string operations using functions with it ..!!



const name = new String('Gour-Sundar-Patar');

// console.log(name[0])
// console.log(name.__proto__)


// console.log(name.toUpperCase());
// console.log(name.length);

// console.log(name.charAt(0));
// console.log(name.indexOf('G'));

// const newName = name.substring(0, 4);
// console.log(newName);
// const anotherString = name.slice(-15,3);
// console.log(anotherString);


// const gameGame = new String("     Gour     ");
// console.log(gameGame);
// console.log(gameGame.trim());

const url = "https://gour.com/gour%20sundar"

const newurl = url.replace('%20','-');
console.log(newurl);
console.log(url.includes('gour'));


const array = name.split('-');
console.log(array);

