$("#carousel").carousel();

$(".item").click(function(){
  $("#carousel").carousel(1);
});

$(".left").click(function(){
  $("#carousel").carousel("prev");
});
