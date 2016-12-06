//Objects

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

console.log(x);

