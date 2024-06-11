let date = new Date();
// to print todays date
console.log(date);

// to print current year
console.log(date.getFullYear());

// to print day week days indexing start from 1 
// 1-> monday; 2-> tuesday; 3-> wednesday; 4-> thursday; 5-> friday; 6-> saturday; 7-> sunday;
console.log(date.getDay());

// to print month month-indexing  start from  0;
// 0-> jan; 1-> feb; 2-> march; 3-> april; 4-> may; 5-> june; 6-> july; 7-> august; 8-> sep; 9-> oct; 10-> nov; 11-> dec;
console.log(date.getMonth());

console.log(date.getHours(),date.getMinutes());
console.log(date.getTime())
