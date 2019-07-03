// object and properties

var john = {
    name: 'visal',
    age: 12,
    birthYear: 1997,
    family: ['jane', 'smith', 'mell'],
    isMarried: false,
    calAge: function(){
    this.age = 2019 - this.birthYear;
}
};

console.log(john.age);
john.calAge();

var x = 'age';
console.log(john[x]);
john['isMarried'] = true;
console.log(john);

// Create new empty object

var jane = new Object();
jane.firstName = 'jane';
jane.lastName = 'Gob';
jane['age'] = 12;

console.log(jane);

// Coding challenges

var jame = {
    heightz : 12,
    widthz: 304,
    calcB : function(){
    this.result = this.widthz * this.heightz;
    return this.result;
}
}

var jo = {
    heightz : 10,
    widthz: 50,
    calcB : function(){
    this.result = this.widthz * this.heightz;
    return this.result;
}
}


if (jame.calcB() > jo.calcB()){
    console.log('jame is bigger');
}
else{
    console.log("jame is smaller");
}