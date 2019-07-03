// variable

console.log(age); // it is undefined because it has the variable, but not be declared with right direction.
// if it doesn't have variable name, it will be error.
var age = 20;

function foo(){
    var age = 60;
    console.log(age);
}

foo();
console.log(age);