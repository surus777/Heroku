const http = require("http");
const server = http.createServer(function (request, response) {
    if (request.url == '/pages/about') response.end("it's a web server")
    else response.end("hello world");

});
server.listen(process.env.PORT || 3000, function ( ){
    console.log("server started")
});