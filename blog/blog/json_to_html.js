const { JSONToHTML } = require('html-to-json-parser'); // CommonJS
const fs = require('fs');

// Specify the path to your JSON file
const filePath = 'converted_html.json';

// Read the JSON file
fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) { console.error('Error reading file:', err); return; }
    try {
        const jsonData = JSON.parse(data);


        // Conversion
        // Async function to use await
        async function convertJsonToHtml() {
            let result = await JSONToHTML(jsonData, true); // Default: true - true: return HTML String, false: return HTML Element
            console.log(result);
        }

        convertJsonToHtml()

    } catch (error) { console.error('Error parsing JSON:', error); }
});

