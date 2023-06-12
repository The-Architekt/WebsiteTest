function generateFile() {
  // Get the user's letter from the text area
  var letter = document.getElementById('letter').value;

  // Fetch the template file using GitHub Pages API
  var url = 'https://api.github.com/repos/yourusername/yourrepository/contents/templates/template.txt';
  
  fetch(url)
    .then(response => response.json())
    .then(data => {
      // Extract the template content from the response
      var templateContent = atob(data.content);
      
      // Create the file content by replacing placeholders in the template
      var finalContent = templateContent.replace('{{letter}}', letter);

      // Create a Blob object with the file content
      var blob = new Blob([finalContent], { type: 'text/plain' });

      // Generate a unique filename for the file (optional)
      var filename = 'generated_file_' + new Date().getTime() + '.txt';

      // Create a link element for downloading the file
      var downloadLink = document.createElement('a');
      downloadLink.href = URL.createObjectURL(blob);
      downloadLink.download = filename;

      // Programmatically click the link to trigger the download
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    })
    .catch(error => console.error('Error fetching template:', error));
}
