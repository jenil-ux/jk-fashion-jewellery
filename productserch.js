document.getElementById("search")
.addEventListener("keyup",()=>{

let value =
document.getElementById("search")
.value.toLowerCase();

let products =
document.querySelectorAll(".card");

products.forEach(card=>{

let title=
card.querySelector("h3")
.innerText.toLowerCase();

card.style.display=
title.includes(value)
? "block"
: "none";

});

});
