console.clear();

/*
1: Create the data for a book in an online store. Create variables for the following data:
  - the book title
  - the author
  - the rating
  - the number of sales
*/

// --v-- write your code here --v--
const title = "The crazy life of a dive instructor";
const author = "Andrea Hohnsen";
let rating = 8;
let numberOfSales = 52345;
// --^-- write your code here --^--

/*
2: Log all variables to the console, for example:

Title: The Lord of the Javascript
Author: Mario
Rating: 4.2
Sales: 120

Increase the number of sales and change the rating of the book afterwards.
Then log all variables to the console again.
*/

// --v-- write your code here --v--

// console.log("Title: " + title);
// console.log("Author: " + author);
// console.log("Rating: " + rating);
// console.log("Sales: " + numberOfSales);

logBookData();

numberOfSales = numberOfSales + 99;
rating = 9.5;

// console.log("Title: " + title);
// console.log("Author: " + author);
// console.log("Rating: " + rating);
// console.log("Sales: " + numberOfSales);

logBookData();
// --^-- write your code here --^--

/*
3: This code is quite repetitive and hard to read.
 - Write a function called logBookData which console logs all
   variables when it is called.
 - Then replace the console logs above with this function.
 - Now increase the number of sales 2 more times and log the data after each increase.
*/

// --v-- write your code here --v--

function logBookData() {
  console.log("Title: " + title);
  console.log("Author: " + author);
  console.log("Rating: " + rating);
  console.log("Sales: " + numberOfSales);
}

numberOfSales = numberOfSales + 100;
logBookData();

numberOfSales = numberOfSales + 1000;
logBookData();

// --^-- write your code here --^--
