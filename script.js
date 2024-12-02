// Define a template using Mustache.js
var template = `
    <ul>
        {{#data}}
        <li>Class Schedule: {{My class schedule}}</li>
        <li>1st Class: {{1st class}}</li>
        <li>2nd Class: {{2nd class}}</li>
        <li>3rd Class: {{3rd}}</li>
        {{/data}}
    </ul>
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
