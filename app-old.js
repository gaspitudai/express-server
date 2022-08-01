const http = require('http');
const PORT = 8080;

http.createServer((req, res) => {

    res.writeHead(200, {
        // 'Content-type': 'text/plain' // mean that returns a text plain file
        'Content-type': 'application/json' // mean that returns a json file
    });

    const user = {
        _id: 's63df54s6',
        name: 'Robertiño'
    }
    // '404 | Page not found',
    
    res.write(JSON.stringify(user)); // only requests strings
    res.end();

}).listen(PORT);

console.log('Listening in port', PORT);