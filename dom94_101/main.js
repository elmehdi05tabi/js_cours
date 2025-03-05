// Crete header
let header = document.createElement("header");
let h3 = document.createElement("h3");
h3.innerHTML = "Elmehdi";
h3.style.color = "yellowgreen";
header.appendChild(h3);
let ul = document.createElement("ul");
let li1 = document.createElement("li");
let li2 = document.createElement("li");
let li3 = document.createElement("li");
let li4 = document.createElement("li");
li1.textContent = "Homme";
li2.textContent = "About";
li3.textContent = "Contacte";
li4.textContent = "Services";
ul.append(li1, li2, li3, li4);
ul.style.display = "flex";
ul.style.listStyle = "none";
ul.style.gap = "25px";
ul.style.fontSize = "15px";
ul.style.color = "gray";
header.appendChild(ul);
document.body.append(header);
header.style.display = "flex";
header.style.justifyContent = "space-between";
header.style.paddingLeft = "5px";
header.style.paddingRight = "5px";
// End Header

// Create Container
let Container = document.createElement("div");
Container.className = "conatiner";
for (let i = 1; i < 16; i++) {
  let div = document.createElement("div");
  let h4 = document.createElement("h2");
  h4.textContent = i;
  let p = document.createElement("p");
  p.textContent = "Product";
  p.style.color = 'gray' ; 
  p.style.fontSize = "15px"
  div.append(h4, p);
  div.style.background = "white";
  div.style.textAlign = "center";
  div.style.display = "flex";
  div.style.justifyContent = "center";
  div.style.flexDirection = "column";
  div.style.lineHeight = ".0" ;
  div.className = "product" ; 
  Container.appendChild(div);
  div.style.width = "32.33%" ; 
  div.style.marginTop = "1%"
  div.style.borderRadius = "5px" ; 
}
Container.style.background = "#ddd";
Container.style.padding = "10px"
Container.style.display = "flex";
Container.style.flexWrap = "wrap";
Container.style.columnGap = "1%" ; 
Container.style.paddingLeft = "10px" ; 
Container.style.paddingRight = "10px" ; 
Container.style.borderRadius = "6px"; 
document.body.append(Container);
// End Container

// Create Footer 
let Footer = document.createElement("footer") ; 
Footer.textContent = 'CopyRight25' ; 
Footer.style.fontSize = "25px" ; 
Footer.style.background = "green" ; 
Footer.style.borderRadius = "6px" ; 
Footer.style.marginTop = "10px" ; 
Footer.style.textAlign = "center" ; 
Footer.style.padding = "20px" ; 
Footer.style.color = "white" ; 
Footer.style.paddingLeft = "10px";
Footer.style.paddingRight = "10px"; 
document.body.append(Footer) ; 
// End Footer 
