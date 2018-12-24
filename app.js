// string
var myName = 'Manaday';
// myName = 28;
// number
var myAge = 27.5;
// myAge = 'twenty seven';
// boolean
var hasHobbies = false;
// hasHobbies = 1;
// this will work as for undefined variables typescript sets implicit type to "any"
var myRealAge1;
myRealAge1 = 27;
myRealAge1 = '27';
// this is explicit type
var myRealAge2;
myRealAge2 = 27;
// myRealAge2 = '27';
// array example
var hobbies = ['Cooking', 'Sports'];
// hobbies = [100]; /* will throw compile-time error */
var hobbies2 = ['Cooking', 'Sports'];
hobbies2 = [100]; /* won't throw compile-time error */
