// 1. NUMBER primitive type
var a = 20;
var b = 56.66;


// 2. STRING primitive type
var firstName = 'sarika';
var lastName = 'ranga';


// 3. BOOLEAN primitive type
var loggedOut = false;
var loggedIn = true;


// 4. null primitive type
var y = null;


// 5. undefined primitive type
var w = undefined;

// 6. Objects

var x = {
    dob  :   24,
    eyeColor  : 'black',
    gender : 'Female',
    y: {
        city: 'Santa clara',
        state: 'California',
        street: 124,
        z: {
            passportNumber: 567789,
            placeOfIssue: 'Hyderabad'
        }
    }
};

x.eyeColor='blue';
x.y.city='Sunnyvale';
x.y.z.passportNumber= 988888;

console.log(b);
console.log(lastName);
console.log(loggedOut);
console.log(y);
console.log(w);
console.log(x);


