let stringOne = 'Only the dead have seen war'
let stringTwo = 'You must be the change you wish to see in the world'

// charAt()
console.log(stringOne.charAt(1));
// charCodeAt()
console.log(stringTwo.charCodeAt(2));
// concat()
console.log(stringOne.concat(stringTwo));
// endsWith()
console.log(stringTwo.endsWith('world'));
// fromCharCode()
console.log(String.fromCharCode(114));
// includes()
console.log(stringOne.includes('the'));
//indexOf ()
console.log(stringTwo.indexOf('must'));
// lastIndexOf()
console.log(stringTwo.lastIndexOf('you'));
// match()
console.log(stringTwo.match(/you/g));
// repeat()
console.log(stringOne.repeat(2));
// replace()
console.log(stringOne.replace('dead', 'living'));
// search()
console.log(stringTwo.search('be'));
// slice()
console.log(stringTwo.slice(1,3));
// split()
console.log(stringTwo.split(''));
console.log(stringTwo.split(' '));
//startsWith ()
console.log(stringOne.startsWith('bob'));
// substr()
console.log(stringTwo.substr(1,2));
// substring()
console.log(stringTwo.substring(1,2));
// toLowerCase()
console.log(stringTwo.toLocaleLowerCase());
// toUpperCase()
console.log(stringTwo.toUpperCase());
// trim ()
let stringThree = '     Nice to see you          '
console.log(stringThree.trim());