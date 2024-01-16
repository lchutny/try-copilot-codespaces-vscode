// Create web server

// Import module
const http = require('http');
const fs = require('fs');
const url = require('url');
const qs = require('querystring');

// Create web server
http.createServer(function (req, res) {
    // Get request URL
    const urlObj = url.parse(req.url, true);

    // Get path name
    const pathName = urlObj.pathname;

    // Get request method
    const method = req.method.toLowerCase();

    // If request path name is /index.html and method is GET
    if (pathName === '/index.html' && method === 'get') {
        // Read index.html file
        fs.readFile('./index.html', function (err, data) {
            // If error
            if (err) {
                console.log(err);
                res.end('404 Not Found');
            }
            // If success
            else {
                // Set response header
                res.writeHead(200, {
                    'Content-Type': 'text/html; charset=utf-8'
                });

                // Send response data
                res.end(data);
            }
        });
    }
    // If request path name is /comment and method is GET
    else if (pathName === '/comment' && method === 'get') {
        // Read comments.json file
        fs.readFile('./comments.json', function (err, data) {
            // If error
            if (err) {
                console.log(err);
                res.end('404 Not Found');
            }
            // If success
            else {
                // Set response header
                res.writeHead(200, {
                    'Content-Type': 'application/json; charset=utf-8'
                });

                // Send response data
                res.end(data);
            }
        });
    }
    // If request path name is /comment and method is POST
    else if (pathName === '/comment' && method === 'post') {
        // Read comments.json file
        fs.readFile('./comments.json', function (err, data) {
            // If error
            if (err) {
                console.log(err);
                res.end('404 Not Found');
            }
            // If success
            else {
                // Convert data to array
                const arr = JSON.parse(data);

                // Get post data
                let str = '';
                req.on('data', function (chunk) {
                    str += chunk;
                });
                req.on('end', function () {
