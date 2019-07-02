//************ if else statement

var firstName = 'visal';
var isMarried = true;

if (isMarried){
    console.log(firstName + 'is married');
}
else{
    console.log(firstName + 'not married');
}

if (firstName === 'koko'){
    console.log('corrected');
}
else{
     console.log('Not correct');
}

// Ternary Operators

firstName === 'visal' ? console.log('visal is corrected') : console.log('name is wrong');

// Switch Statements

var job = 'teacher';
switch(job) {
    case 'student':
        console.log('you are a student');
        break;
    case 'teacher':
        console.log('you are a teacher');
        break;
    default:
        console.log('you are other');
}

// Switch statement with logical operator

var age = 11;
switch(true){
    case age < 12:
        console.log('Kid');
        break;
    case age >= 12 && age <=18:
        console.log('Teenager');
        break;
    case age > 18:
        console.log('adult');
    default:
        console.log('sth');
}




