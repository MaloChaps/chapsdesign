// nav

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("header-main").style.top = "0";
    } else {
        document.getElementById("header-main").style.top = "-80px";
    }
    prevScrollpos = currentScrollPos;
}



// scroll reveal
const sr = ScrollReveal();

sr.reveal('.h3', {
	 delay: 0.2,
    duration: 2000,
    distance: "150px",
    origin: "bottom"
});

sr.reveal('.text-recent', {
	 delay: 0.5,
    duration: 2000,
    distance: "150px",
    origin: "bottom"
});

sr.reveal('.box-fullsize', {
	 delay: 0.5,
    duration: 2000,
    distance: "150px",
    origin: "bottom"
});

sr.reveal('.box-medium', {
	 delay: 0.5,
    duration: 2000,
    distance: "150px",
    origin: "bottom"
});

sr.reveal('.box-large', {
	 delay: 0.5,
    duration: 2000,
    distance: "150px",
    origin: "bottom"
});

sr.reveal('.box-light', {
	 delay: 0.5,
    duration: 2000,
    distance: "150px",
    origin: "bottom"
});


sr.reveal('.testimonial-section', {
	 delay: 0.5,
    duration: 2000,
    distance: "150px",
    origin: "bottom"
});


