var $form = $('#test-form'),
   url = 'https://script.google.com/macros/s/AKfycbzjhVtdQBOd6vuWGPNG_avUgl0xehLyPzxbPKokGE8w-w_evNY/exec'
   
$('#submit-form').on('click', function(e) {
   e.preventDefault();
   var jqxhr = $.ajax({
      url: url,
      method: "GET",
      dataType: "json",
      data: $form.serializeArray(),
      success: function() {
         $("<p>Your response has been recorded</p>").appendTo($(".response"));
      },
      error: function() {
         $("<p>There was an error obtaining data</p>").appendTo($(".response"));
      }
   });
})
