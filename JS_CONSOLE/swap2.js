// swap 1 
var a = 10;
var b = 16;

a = a ^ b;
b = a ^ b;
a = a ^ b;

console.log(a + " " + " " + b );

// the return statement will halt the script execution,
//  preventing the "swap 2" code from being executed.
return;

// swap 2 
let c = 5;  
let d = 25;

c =  c + d ;
d = c  - d;
c = c - d;
console.log(d);
console.log(c)
 