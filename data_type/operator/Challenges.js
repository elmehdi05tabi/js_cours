/*
  Challenge 1
*/

let a = 10;
let b = "20";
let c = 80;

console.log(++a + +b++ + +c++ - +a++);
console.log(++a + -b + +c++ - -a++ + +a);
console.log(--c + +b + --a * +b++ - +b * a + --a - +true);

/*
  [++a] [+]
  [++a]
  - Value: 11
  - Explain: pre incremant 
  [+] 
  - Explain: add 
  [+b++]
  - Value:20
  - Explain: past  incremant  and unary plus 
  
  [+] 
  - Explain:  add
  [c++]
  - Value:80
  - Explain: past  incremant 
    [-] 
  - Explain: saustraction 
  [+a++]
  - Value:10
  - Explain: past  incremant and unary plus  
  
*/
// =========================================================
/*
  [++a] [+]
  [++a]
  - Value: 11
  - Explain: pre incremant 
  [+] 
  - Explain: add 
  [-b] [+]
  [-b]
  - Value:-20
  - Explain:unary  negation  
  [+] 
  - Explain:  add

  [+c++] [-]
  [+c++]
  - Value:80
  - Explain: past incremant 
    [-] 
  - Explain: saustraction 
  [-a++]
  - Value:-10
  - Explain: past  incremant and unary negation 
  [+] [+a]

  
*/

/*
  Challenge 2
*/

let d = "-100";
let e = "20";
let f = 30;
let g = true;

// Only Use Variables Value
// Do Not Use Variable Twice

console.log(-d * +e); // 2000
console.log(-d++ + (+e++ * 2) + f + g  ); // 173
