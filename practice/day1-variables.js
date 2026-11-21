// 1. Store the Sauce Demo URL, username and password
const baseUrl = 'https://www.saucedemo.com/';
const username = 'standard_user';
const password = 'secret_sauce';

// 2. Store a product price of 29.99
const price = 29.99;

// 3. Store whether the user is logged in (false at first)
let isLoggedIn = false;

// 4. Store a cart count starting at 0, then add 1 to it
let cartCount = 0;
cartCount = cartCount + 1;

// 5. Change "is logged in" to true
isLoggedIn = true;

// 6. Print each value and its type
console.log(baseUrl, typeof baseUrl); // string
console.log(username, typeof username); //string
console.log(password, typeof password); //string
console.log(price, typeof price); //number
console.log(isLoggedIn, typeof isLoggedIn); //bollean
console.log(cartCount, typeof cartCount); //number