const http = require('http');

const fs = require('fs');
const path = require('path');

// const app = express();

// app.get('/currenttime', function(req, res) {
//     res.send('<h1>' + new Date().toISOString() + '</h1>');
// }) // localhost:3000

// app.get('/', function(req, res) {
//     res.send('<h1>Hello world!</h1>');
// })

function handleRequest(request, response){
    if(request.url === '/'){

        response.statusCode = 200;
        response.end("<input type='text'/>");
        // response.end("<form method='post' action='/server'><label>username</label></form>");

    }else if(request.url === '/currenttime'){

        response.statusCode = 200;
        response.end('<h1>' + new Date().toISOString() + '</h1>');

    }
}

// app.listen(3000)

const server = http.createServer(handleRequest);

server.listen(3000);