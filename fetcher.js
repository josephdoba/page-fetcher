// takes two command line args. a URL and a local path, and requests library.
const args = process.argv.slice(2);
const request = require('request');

// file system module
const fs = require('fs');
let content = "";

// info for tests:
// url: http://www.example.edu/
// path: ./index.html

// Send a HTTP request:
request(args[0], (error, response, body) => {
  console.log("Retrieving website data...");
  setTimeout(() => {
    // Assign the content variable to Body
    content = body;
    // Write the content variable into the file
    console.log("Writing to file...");
    setTimeout(() => {
      fs.writeFile(args[1], content, err => {
        if (err) {
          console.error(err);
          return;
        }
        console.log(`file written successfully and saved at: ${args[1]}`);
      });
    }, 500);
  }, 1000);
});

