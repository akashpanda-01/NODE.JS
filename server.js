const http = require("http");

const server = http.createServer((req, res) => {
    if(req.url === "/getsecretdata"){
        res.end("No Secret Data...");
    }
    res.end("Hello World");
});

server.listen(3000);