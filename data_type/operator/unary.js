/*
-  + unary plus [ retun number if not numbers]
   - unary negation [ retun nombre if not numbres + negts it]
   Tests 
    - normal numbres 
    - string numbers 
    - sting negatives numbres 
    - string text 
    - float 
    - hexadecimal numeral system => 0xff
    - null
    -false
    -true

*/
//   unary plus 
// =============================
console.log(+100);
console.log(+"100");
console.log(+"-100");
console.log(+"ossama"); 
console.log(+"15.6");
console.log(+"0xff");
console.log(+true);  
console.log(+false);
console.log(+null);
// =============================
// unary negation 
// =============================
console.log(-100);
console.log(-"100");
console.log(-"-100");
console.log(-"ossama");
console.log(-"15.6");
console.log(-"0xff");
console.log(-true);
console.log(-false);
console.log(-null);
// =============================

console.log(+"50 elmehdi")

/*
type corection ( type casting)
- + 
- - 
- "" + 2 
- - false - true 
*/
let a ="10";
let b = 20 ;
let c = true ;

console.log( a + b  );  // > 1020
console.log( +a + b  ); // => 30
console.log(""- 2); // => -2 
console.log(("")); // => 0
console.log(0- 2);