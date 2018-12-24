// string
let myName: string = 'Manaday';
// myName = 28;

// number
let myAge: number = 27.5;
// myAge = 'twenty seven';

// boolean
let hasHobbies: boolean = false;
// hasHobbies = 1;

// this will work as for undefined variables typescript sets implicit type to "any"
let myRealAge1;
myRealAge1 = 27;
myRealAge1 = '27';

// this is explicit type
let myRealAge2: number;
myRealAge2 = 27;
// myRealAge2 = '27';

// array example
let hobbies = ['Cooking', 'Sports'];
// hobbies = [100]; /* will throw compile-time error */

let hobbies2: any[] = ['Cooking', 'Sports'];
hobbies2 = [100]; /* won't throw compile-time error */

// tuples
// tuples are really just arrays with mixed types and 
// a limited number of items.
let address: [string, number] = ["Super street", 99];
