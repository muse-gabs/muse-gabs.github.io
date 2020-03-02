var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slidesToManipulate = document.getElementsByClassName("picture");
  var dots = document.getElementsByClassName("dot");
  if (n > slidesToManipulate.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slidesToManipulate.length}
  for (i = 0; i < slidesToManipulate.length; i++) {
      slidesToManipulate[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slidesToManipulate[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

showSlides(); // call showslide method 
   
