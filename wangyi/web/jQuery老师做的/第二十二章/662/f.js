var a=require('./s.js');//从这引入
console.log(a);

var b=require('./leo.js');
console.log(b.sum(1,2,3));

var c=require('./module.exports');
console.log(c.a,c.b,c.c());