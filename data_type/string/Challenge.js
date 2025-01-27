var tl = "elzero";
const ds = "elzero web scolle";
let dt = "25/10";

let div = `
<div class="car" style="
background-color:yellow;
border-radius:20px ;
text-align:center;
color:blue" >
<h3>hello ${tl}</h3>
<p>${ds}</p>
<span>${dt}</span>
`;
document.write(div.repeat(4));
