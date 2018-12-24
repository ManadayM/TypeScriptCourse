// string
let myName = 'Manaday';
// myName = 28;

// number
let myAge = 27.5;
// myAge = 'twenty seven';

// boolean
let hasHobbies = false;
// hasHobbies = 1;

// this will work as for undefined variables typescript sets implicit type to "any"
let myRealAge1;
myRealAge1 = 27;
myRealAge1 = '27';

// this is explicit type
let myRealAge2: number;
myRealAge2 = 27;
myRealAge2 = '27';
