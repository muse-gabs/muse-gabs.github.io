var slideIndex2 = 1;
showDivsPor(slideIndex2);

function plusDivPor(n) {
  showDivsPor(slideIndex2 += n);
}

function currentDivPor(n) {
  showDivsPor(slideIndex2 = n);
}

function showDivsPor(n) {
  var i;
  var x = document.getElementsByClassName("portraitSlides");
  var dots = document.getElementsByClassName("num-2");
  if (n > x.length) {slideIndex2 = 1}    
  if (n < 1) {slideIndex2 = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  //for (i = 0; i < dots.length; i++) {
  //  dots[i].className = dots[i].className.replace(" w3-red", "");
  //}
  x[slideIndex2-1].style.display = "block";  
  //dots[slideIndex2-1].className += " w3-red";
}