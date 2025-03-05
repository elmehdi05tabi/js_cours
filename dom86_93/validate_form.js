/*
  DOM [Events]
  - Validate Form Practice
  - Prevent Default
*/

let user = document.getElementById("nom");
let age = document.getElementById("age");
document.forms[0].onsubmit = function (e) {
  let uservalid = false;
  let agevalide = false;
  console.log(user.value) ; 
  console.log(age.value) ; 
  if (user.value.length <= 10 && user.value !== "") {
    uservalid = true;
  }
  if (age.value !== "") {
    agevalide = true;
  }
  if (uservalid === false || agevalide === false) {
    e.preventDefault();
  }
};
