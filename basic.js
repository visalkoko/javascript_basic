var firstName = 'John';
console.log("visal");
console.log(firstName);

var job, age, isMarried;
job = 'Teacher',
age = 29;
isMarried = false;

console.log(firstName + ' is ' + job + ' age is ' + age + ' is he married? ' + isMarried );

//changing the value from the same variable

job = 'Student';
console.log(job);

//Pop up prompt on screen
var lastName = prompt('what is your name?');
console.log('My name is ' + firstName + ' ' + lastName);

//alert dialog
alert('hello guys!');


// **************Basic operators

var year, yearJohn, yearMark, now, ageJohn, ageMark;
now = 2019;
ageJohn = 18;
ageMark = 21;

// Math operators

yearJohn = now - ageJohn;
yearMark = now - ageMark;
console.log(yearJohn);

// Logical operators

var johnOlder = yearJohn > yearMark;
console.log(johnOlder);

// typeof operators to show the type

console.log(typeof johnOlder);
console.log(typeof ageJohn);

// ***********Operator Precedence, which operator executes first



var now = 2019;
var yearJohn = 1987;
var fullAge = 18;

var isFullAge = now - yearJohn >= fullAge; // check the table precedence, - is higher than >= , and = is the lowest
console.log(isFullAge);

// Multiple assignment

var x, y;
x = y = (3 + 5) * 4 - 6; // Check associativity from left to right, from right to left execution
console.log(x,y); // can execute on the console.

// More Operators

x *= 2;
x += 10;
x--;








