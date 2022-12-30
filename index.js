const http = require("http");
const fs = require("fs");

var port = 3000;

const server = http.createServer((req, res)=>{
    res.writeHead(200, {"Content-Type": "text/plain"});
    fs.readFile("./test.json", "utf8", async (err, jstring)=>{
        if(err) {
            console.log(err);
            res.write("Couldn't read file");
        } else res.write(jstring);
        res.end()
    }); 
});

server.listen(port, (err)=>{
    if(err) return console.log(err);
    console.log("server listening on port "+port);
});