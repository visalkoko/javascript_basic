// Initialize new array

var names = ['john', 'visal', 'kona'];
var year = new Array(1995, 1996, 1990);
console.log(names[1]);
console.log(names);

// Mutate new data
names[1] = 'marry';
// add new index at the end
names[names.length] = 'gogo';
console.log(names);

//Difference data types
var john = ['john', 'age', 1995, 'students'];

// add data to the end
john.push('KIT');
// add data to the beginning
john.unshift('MR.')
// remove the last element
john.pop();
// remove the first element
john.shift();
console.log(john);

console.log(john.indexOf('students'));
var result = john.indexOf('designer') === -1 ? 'John is not desinger' : 'John is a designer';
console.log(result);
