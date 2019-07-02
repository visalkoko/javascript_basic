function calculateAge (year){
    var result = 2019 - year;
    return result;
}

var age = calculateAge(1997);
console.log('Your age is ' + age);

function retireAge(year, firstName){
    var age = 65 - calculateAge(year);
    if (age > 0){
         console.log( firstName + ' will retire in ' + age);
    }
    else
        {
            console.log('you are retire already');
        }
}

retireAge(1910, 'visal');
retireAge(1996, 'non');

// ********** Function Expression

var whatyoudo = function(job) {
    switch(job){
        case 'teacher':
            return job + ' has ' + age;
        case 'student':
            return job + ' has ' + age;
        case 'friend':
            return job + ' has ' + age;
        default:
            return 'none above';
    }
}

console.log(whatyoudo('teacher'));









