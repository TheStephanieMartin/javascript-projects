//Part Three section one

let language = 'JavaScript';

//1. Use string concatenation and two slice() methods to print 'JS' from 'JavaScript'
console.log(language.slice(0,1) + language.slice(4,5));

//2. Without using slice(), use method chaining to accomplish the same thing.
console.log(language[0] + language[4].toUpperCase());

//3. Use bracket notation and a template literal to print, 
//"The abbreviation for 'JavaScript' is 'JS'."
let abrJS = language[0] + language[4].toUpperCase();
console.log(`The abbreviation for ${language} is ${abrJS}`);
//4. Just for fun, try chaining 3 or more methods together, and then print the result.
console.log(language.toUpperCase().trim());
//Part Three section Two

//1. Use the string methods you know to print 'Title Case' from the string 'title case'.

let notTitleCase = 'title case';
 let fixedNotTitleCase = notTitleCase.replace('t','T').replace('c','C');
 console.log(fixedNotTitleCase);

