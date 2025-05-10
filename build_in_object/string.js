console.log(String);
const str = new String("San kyi tar par")

console.log(str.toUpperCase());
console.log(str.toLowerCase());

console.log(str.substring(0,3));
console.log(str.substring(4,7));

console.log(str.slice(8,11));

console.log(str.trim());
console.log(str.trimStart());
console.log(str.trimEnd());

const num = '123'
console.log(num.padStart(5,0));
console.log(num.padEnd(5,'Hi'));

console.log(str.search('tar'));
console.log(str.search('grap'));

console.log(str.replace('kyi','pya'));
console.log(str.replace('a','zzz'));

console.log(str.split());
console.log(str.split(""));
console.log(str.split(" "));
console.log(str.split("a"));