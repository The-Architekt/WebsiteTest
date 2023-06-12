function generateFile() {
  // Get the user's letter from the text area
  var letter = document.getElementById('letter').value;

  // Fetch the template file
  fetch('template.txt')
    .then(response => response.text())
    .then(template => {
      // Create the file content by replacing placeholders in the template
      var finalContent = template.replace('{{letter}}', letter);

      // Create a Blob object with the file content
      var blob = new Blob([finalContent], { type: 'text/plain' });

      // Generate a unique filename for the file (optional)
      var filename = 'generated_file_' + new Date().getTime() + '.ahk';

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
