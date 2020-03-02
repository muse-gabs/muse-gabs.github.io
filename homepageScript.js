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
   
let pic = document.getElementsByClassName("picture");
pic.addEventListener('mouseout',
function showSlides() 
{ 
    var i; 
  
    // get the array of divs' with classname image-sliderfade 
    var slides = document.getElementsByClassName("picture");  
      
    // get the array of divs' with classname dot 
    var dots = document.getElementsByClassName("dot");  
  
    for (i = 0; i < slides.length; i++) { 
        // initially set the display to  
        // none for every image. 
        slides[i].style.display = "none";  
    } 
   
     // increase by 1, Global variable 
    slideIndex++;  
   
     // check for boundary 
    if (slideIndex > slides.length)  
    { 
        slideIndex = 1; 
    } 
   
    for (i = 0; i < dots.length; i++) { 
        dots[i].className = dots[i].className. 
                            replace(" active", ""); 
    } 
   
    slides[slideIndex - 1].style.display = "block"; 
    dots[slideIndex - 1].className += " active"; 
  
    // Change image every 5 seconds 
    setTimeout(showSlides, 5000);  
});
