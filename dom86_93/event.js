/*
  DOM [Events]
  - Use Events On HTML
  - Use Events On JS
  --- onclick
  --- oncontextmenu
  --- onmouseenter
  --- onmouseleave

  --- onload
  --- onscroll
  --- onresize

  --- onfocus
  --- onblur
  --- onsubmit
*/
let btn  = document.getElementById('cl') ; 
btn.onclick = function () {
    console.log("bonjour ramadn moubrak ") ; 
}
btn.onmouseenter = function () {
    btn.style.background = "red" ; 
}
btn.onmouseout = function () {
    btn.style.background = "green" ; 
}
