
// js 所有数字都是 64 位浮点数的形式存储
console.log(1 === 1.0)

let a = 0.1;
let b = 0.2;
console.log(a + b);
console.log((a + b) === 0.3);

console.log(Math.pow(2,1024));

console.log(123e3);
console.log(123e-3);

console.log(0xff);
console.log(0o377);
console.log(0b11);

console.log(-0 === +0);

console.log(parseInt("123"));
console.log(parseInt("    90"));
console.log(parseInt(1.23) === parseInt("1.23"));

console.log(parseInt("0x10"));
console.log(parseInt("0xff"));

console.log(parseInt("1000", 2));
console.log(parseInt("1000", 8));
console.log(parseInt("1000", 10));
console.log(parseInt("1000", 16));