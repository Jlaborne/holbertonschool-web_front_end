function createElement(data) {
  // Create a paragraph element
  const paragraph = document.createElement("p");

  // Set the content of the paragraph to the data argument
  paragraph.textContent = data;

  // Append the paragraph to the document body
  document.body.appendChild(paragraph);
}

function queryWikipedia(callback) {
  // Create a new XMLHttpRequest object
  const xhr = new XMLHttpRequest();

  // Define the URL for the API request
  const url =
    "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*";

  // Open a GET request
  xhr.open("GET", url, true);

  // Set up the onload event handler
  xhr.onload = function () {
    if (xhr.status === 200) {
      // Parse the JSON response
      const response = JSON.parse(xhr.responseText);

      // Extract the "extract" from the response
      const pages = response.query.pages;
      const extract = Object.values(pages)[0].extract;

      // Call the callback function with the extracted content
      callback(extract);
    } else {
      console.error("Error fetching data from Wikipedia: ", xhr.status);
    }
  };

  // Set up the onerror event handler
  xhr.onerror = function () {
    console.error("Network error occurred while fetching data.");
  };

  // Send the request
  xhr.send();
}
