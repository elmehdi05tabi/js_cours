let btn = document.querySelector(".add");
let arr = [{id:'000000',title:'tabu'}];
btn.addEventListener("click", function () {
  let text = document.querySelector(".input").value;
  let info = {
    id: Math.random(),
    title: text,
  };
  arr.push(info) ; 
  localStorage.setItem("tasks",JSON.stringify(arr)) ; 
  console.log(arr) ; 
  arr.splice(0,1) ;
  console.log(arr) ; 
});
