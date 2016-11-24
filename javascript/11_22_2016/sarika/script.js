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
var x = undefined;

// 6. Objects

var person = {
    gender : 'Female',
    dob  :   24,
    eyeColor  : 'black',
    country: {

        state: 'Calfornia',
        street: 124,
        city: 'Santa clara',
        passport: {
            placeofIssue: 'Hyderabad',
            passportNumber: 567789
        }
    }
};

console.log(b);
console.log(lastName);
console.log(loggedOut);
console.log(y);
console.log(x);
console.log(person);
console.log(person.country.state);
console.log(person.country.passport.passportNumber);

