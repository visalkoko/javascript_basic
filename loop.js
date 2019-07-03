// For loop

for (var i = 0; i < 20; i++) {
    console.log(i);
}

// While
var john = ['visal', 'koko', 'mimi', 1990, false, 'komoi'];

var i = 0;
while (i < john.length) {
    console.log(john[i]);
    i++;
}

// Continue and break
for (i = 0; i < john.length; i++) {
    if (typeof john[i] !== 'string') {
        continue;
    }
    console.log(john[i]);
}

// loop backwards

for (var i = john.length - 1; i >= 0; i--) {
    console.log(john[i]);
}

// Coding Challenge

var Jammy = {
    name: 'jammy',
    age: 19,
    bills: [124, 100, 200, 300],
    calTips: function () {
        this.tips = [];
        this.finalValues = [];
        for (var i = 0; i < this.bills.length; i++) {
            var percentage;
            var bill = this.bills[i];
            if (bill < 50) {
                percentage = .2;
            } else if (bill >= 50 && bill < 200) {
                percentage = .15;
            } else {
                percentage = .1;
            }
            this.tips[i] = bill * percentage;
            this.finalValues[i] = bill + bill * percentage;
        }
    }
}

Jammy.calTips();
console.log(Jammy);
