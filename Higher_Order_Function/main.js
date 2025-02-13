/*
  - forEach
  --- method executes a provided function once for each array element.

  Syntax forEach(callBackFunction(Element, Index, Array) { }, thisArg)
  - Element => The current element being processed in the array.
  - Index => The index of the current element being processed in the array.
  - Array - The Current Array

   Note
  - Doesnt Return Anything [Undefined]
  - Break Will Not Break The Loop
*/
let alllis = document.querySelectorAll("ul li") ; 
let alldiv = document.querySelectorAll(".content div");
alllis.forEach( function(element){
  element.onclick = function() {
    // suprimer les class qui je vais cliqué 
    alllis.forEach(function (ele) {
      ele.classList.remove("active") ; 
    }) ; 
    element.classList.add("active") ;
    alldiv.forEach(function(element){
      element.style.display = "none" ; 
    })
    }
})
