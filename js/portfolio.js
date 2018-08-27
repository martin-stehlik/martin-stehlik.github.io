/*Smooth scrolling - pure JS solution - for Chrome and Firefox only */

// let navLinks = document.querySelectorAll("nav a");

// for(let i = 0; i < navLinks.length; i++){
// 	navLinks[i].addEventListener("click", function(event) {
// 		// prevent direct jump to #
// 		event.preventDefault();
// 		let targetId = this.getAttribute("href");
// 		let target = document.querySelector(targetId);
// 		target.scrollIntoView({
// 			block: "start",
// 			behavior: "smooth"
// 		});
// 	});
// }


/* Smooth scroll with jQuery */ 
$("nav a").click(function() {
    var targetId = $(this).attr("href");   // save href attr of the anchor tag 
    $("html, body").animate({scrollTop: $(targetId).offset().top - 20}, 700); // animate html (and body) scrollTop property to the offset().top position of the target 
    return false; // prevent default direct jump and event bubbling  
});

/* show/hide the sidebar */ 
var toggler = document.querySelector("#js-toggler");
var togglerIcon = document.querySelector("#js-toggler i")
var menu = document.querySelector("#js-menu");

toggler.addEventListener("click", function() {
		// show/hide sidebar 
		menu.classList.toggle("menu-hidden");
		// change toggler color 
		this.classList.toggle("toggler-on")
		// change toggler icon 
		switch (togglerIcon.getAttribute("class")){
			case "fas fa-bars":
			  togglerIcon.setAttribute("class", "fas fa-times");
				break;
			case "fas fa-times": 
			  togglerIcon.setAttribute("class", "fas fa-bars");
				break;
		}
});











