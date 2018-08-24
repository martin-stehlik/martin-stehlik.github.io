/* Smooth scrolling - pure JS solution - for Chrome and Firefox only

var buttonAbout = document.getElementById("button-about");
var about = document.getElementById("about");

buttonAbout.addEventListener("click", function(event) {
    event.preventDefault() // prevent direct jump to #
    about.scrollIntoView({
        block: "start",
        behavior: "smooth"
    });
});
*/

/* Smooth scroll with jQuery */ 
$("nav a").click(function() {
    var targetId = $(this).attr("href");   // save href attr of the anchor tag 
    $("html, body").animate({scrollTop: $(targetId).offset().top - 15}, 750); // animate html (and body) scrollTop property to the offset().top position of the target 
    return false; // prevent default direct jump and event bubbling  
});


var toggler = document.querySelector("#js-toggler");
var menu = document.querySelector("#js-menu");

toggler.addEventListener("click", function() {
    menu.classList.toggle("menu-hidden");
});











