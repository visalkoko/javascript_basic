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


// Array Coding Challenges

function tipBill(bill){
    var percentage;
    if (bill < 50){
        percentage = .2;
    }
    else if (bill >=50 && bill <200){
        percentage = .15;
    }
    else{
        percentage = 0.1;
    }
    return bill * percentage;
}

console.log(tipBill(50));

var bill = [30, 100, 300];
var allTips = [tipBill(bill[0]), tipBill(bill[1]), tipBill(bill[2])];
var finalPaid = [bill[0] + allTips[0],
                 bill[1] + allTips[1],
                 bill[2] + allTips[2],
                ];

console.log(allTips, finalPaid);


