// import { HTMLToJSON } from 'html-to-json-parser'; // ES6
const { HTMLToJSON } = require('html-to-json-parser'); // CommonJS
const fs = require('fs');

// Specify the path to your html file
const filePath = 'savedHtml.html';

// Read the JSON file
fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) { console.error('Error reading file:', err); return; }

    // Data
    const element = data

    // Async function to use await
    async function convertElementToJson() {
        let result = await HTMLToJSON(element, true); // Default: false - true: return JSON, false: return JS Object
        console.log(result);
    }

    // Call the async function
    convertElementToJson();
    
});






