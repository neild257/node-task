// Matching a pattern in a string
let phoneNumber = '+46-729-11 12 13';
let phoneRegx = /^[\+\d\-\s]+$/;
let isPhoneValid = phoneNumber.match(phoneRegx);
console.log(`You have a ${isPhoneValid ? 'Valid' : 'Invalid'} phone number`);

// Checking the occurances in the a given string
let targetString = 'Harshit is writing code. Harshit is in video. Harshit likes regex';
// added two flags g for global and i for ignore case.
let pattern = /harshit/gi;
let extractHarshit = targetString.match(pattern);
console.log(`Harshit appears ${extractHarshit.length} times in \"${targetString}\"`);

// Replacing the all occurances of harshit to devtips
let replaceHarshit = targetString.replace(pattern, 'devTips');
console.log(`${replaceHarshit}`);


// trying {} shorthands
// /a*/ will match empty string and string with all a's similarly with a{0,}
// /a+/ will match atleast 1 or more string but will not match the null string similarly with a{1,}
let shorthandPattern = /a*/;
targetString = 'aaaaaaa';
console.log(`The matched string is: ${targetString.match(shorthandPattern)}`);