// Define a template using Mustache.js
var template = `
    <div>
        {{#data}}
        <h2>My Class Schedule: {{My class schedule}}</h2>
        <p>1st Class: {{1st class}}</p>
        <p>2nd Class: {{2nd class}}</p>
        <p>3rd Class: {{3rd}}</p>
        {{/data}}
    </div>
`;

// Get the 'output' div element
var output = document.getElementById('output');

// Fetch JSON data from the file
fetch('data.json')
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        // Render the data using the template
        var rendered = Mustache.render(template, { data: data });
        output.innerHTML = rendered;
    })
    .catch(function(error) {
        console.error('Error:', error);
    });
