// Define a template using Mustache.js
var template = `
    <div>
        {{#data}}
        {{#My class schedule}}
        <h2>My Class Schedule: {{.}}</h2>
        {{/My class schedule}}
        {{#1st class}}
        <p>1st Class: {{.}}</p>
        {{/1st class}}
        {{#2nd class}}
        <p>2nd Class: {{.}}</p>
        {{/2nd class}}
        {{#3rd}}
        <p>3rd Class: {{.}}</p>
        {{/3rd}}
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
