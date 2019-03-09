// Detect touch device
window.addEventListener('touchstart', detectTouch);

function detectTouch() {
	document.body.classList.add('touch-device');
	window.removeEventListener('touchstart', detectTouch);
}

/* Smooth scroll with jQuery */ 
$('a[href*="#"]').click(function(){  
	// save href attr of the anchor tag
	  let targetId = $(this).attr("href");    
	// animate html and body scrollTop property to the offset().top position of the target
	  $("html, body").animate({scrollTop: $(targetId).offset().top - 25}, 700);  
    return false; // prevent default direct jump and event bubbling  
});

 /* show/hide the sidebar */
let toggler = document.querySelector("#js-toggler");
let togglerIcon = document.querySelector("#js-toggler i");
let menu = document.querySelector("#js-menu");
let menuLinks = document.querySelectorAll(".menu a");

for(let i=0; i<menuLinks.length; i++){
	menuLinks[i].addEventListener("click", toggleSidebar);
};
toggler.addEventListener("click", toggleSidebar);

/* show current year in the footer */ 
let timeNow = new Date;
let currentYearEl = document.getElementById("js-current-year");
currentYearEl.textContent = timeNow.getFullYear();


// functions 

function toggleSidebar(){
	// show/hide sidebar 
	menu.classList.toggle("menu-hidden");
	// change toggler color 
	toggler.classList.toggle("toggler-on")
	// change toggler icon 
	switch (togglerIcon.getAttribute("class")){
		case "fas fa-bars":
			togglerIcon.setAttribute("class", "fas fa-times");
			break;
		case "fas fa-times": 
			togglerIcon.setAttribute("class", "fas fa-bars");
			break;
	}
}
