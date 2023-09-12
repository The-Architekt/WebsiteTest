$(document).ready(function() {
  $.ajax({
    url: 'example.txt', // Specify the relative path to your text file 
    method: 'GET',
    dataType: 'text', // We expect text content
    success: function(data) {
      // Handle the content of the text file here
      console.log(data);
      },
      error: function(error) {
      // Handle any errors here. console.error(error);
    });
  });
}
