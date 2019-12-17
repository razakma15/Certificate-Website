$(document).on("scroll", function () {
var pageTop = $(document).scrollTop()
var pageBottom = pageTop + $(window).height()
var tags = $("section")

for (var i = 0; i < tags.length; i++) {
var tag = tags[i]

if ($(tag).position().top < pageBottom) {
$(tag).addClass("visible")
} else {
  $(tag).removeClass("visible")
}
}
})



$( function() {
		$( ".glitch-img" ).mgGlitch({
          // set 'true' to stop the plugin
				  destroy : false,
          // set 'false' to stop glitching
          glitch: true,
          // set 'false' to stop scaling
          scale: true,
          // set 'false' to stop glitch blending
          blend : true,
          // select blend mode type
          blendModeType : 'hue',
          // set min time for glitch 1 elem
          glitch1TimeMin : 200,
          // set max time for glitch 1 elem
          glitch1TimeMax : 400,
          // set min time for glitch 2 elem
          glitch2TimeMin : 10,
          // set max time for glitch 2 elem
          glitch2TimeMax : 100,
		});
});



var slideIndex = 1;

window.addEventListener("load",function() {
    var slideshowContainer;
    showSlides(slideIndex);

    slideshowContainer = document.getElementsByClassName('slideshow-inner')[0];
})

// NEXT AND PREVIOUS CONTROL
function plusSlides(n){
  if (n < 0){
    showSlides(slideIndex -= 1);
  } else {
   showSlides(slideIndex += 1);
  }
}
function showSlides(n){
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}





var slideIndex2 = 1;

window.addEventListener("load",function() {
    var slideshowContainer;
    showSlides2(slideIndex2);

    slideshowContainer = document.getElementsByClassName('slideshow_inner2')[0];
})

// NEXT AND PREVIOUS CONTROL
function plusSlides2(n){
  if (n < 0){
    showSlides2(slideIndex2 -= 1);
  } else {
   showSlides2(slideIndex2 += 1);
  }
}
function showSlides2(n){
  var i;
  var slides = document.getElementsByClassName("mySlides2");
  if (n > slides.length) {slideIndex2 = 1}
  if (n < 1) {slideIndex2 = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex2-1].style.display = "block";
}




var slideIndex3 = 1;

window.addEventListener("load",function() {
    var slideshowContainer;
    showSlides3(slideIndex3);

    slideshowContainer = document.getElementsByClassName('slideshow_inner3')[0];
})

// NEXT AND PREVIOUS CONTROL
function plusSlides3(n){
  if (n < 0){
    showSlides3(slideIndex3 -= 1);
  } else {
   showSlides3(slideIndex3 += 1);
  }
}
function showSlides3(n){
  var i;
  var slides = document.getElementsByClassName("mySlides3");
  if (n > slides.length) {slideIndex3 = 1}
  if (n < 1) {slideIndex3 = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex3-1].style.display = "block";
}
