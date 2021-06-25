const http = require('http');
const app = require('./app/app');
const port = 8000;


const server = http.createServer(app);
if(server){
console.log("Server is running on port :: ",port );
}

server.listen(port);
