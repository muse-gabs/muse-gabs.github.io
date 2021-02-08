var slideIndex = 1;
showDivsLand(slideIndex);

function plusDivLand(n) {
  showDivsLand(slideIndex += n);
}

function currentDivLand(n) {
  showDivsLand(slideIndex = n);
}

function showDivsLand(n) {
  var i;
  var x = document.getElementsByClassName("landscapeSlides");
  var dots = document.getElementsByClassName("num-1");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  //for (i = 0; i < dots.length; i++) {
  //  dots[i].className = dots[i].className.replace(" w3-red", "");
  //}
  x[slideIndex-1].style.display = "block";  
  //dots[slideIndex-1].className += " w3-red";
}