document.querySelectorAll(".expandable-content").forEach((function(e){console.log(e);var l=e.querySelector(".summary"),o=e.querySelector(".details");l.addEventListener("click",(function(){o.style.display="block"===o.style.display?"none":"block"}))}));