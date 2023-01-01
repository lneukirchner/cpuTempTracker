const http = require("http");
const fs = require("fs");

var port = 3000;
var temps = [];

const server = http.createServer((req, res)=>{
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.write("These are the temps for the past 10 minutes, taken about every 10 seconds. Most recent is last.\n\n"+"Temps: "+temps.join(", "));
    res.end();
});

function getTemps() {
    console.log("gettemps")
    fs.readFile("./sensorsOutput.json", "utf8", async (err, jstring)=>{
        var temp;
        if(err) {
            console.log(err);
            temp = "0";
        } else { 
            temp = JSON.stringify(JSON.parse(jstring)['coretemp-isa-0000']['Package id 0']['temp1_input']);
            if(temp==undefined) temp="0";
        }
        temps.push(temp);
        if(temps.length>60) temps.shift();
    }); 
}

server.listen(port, (err)=>{
    if(err) return console.log(err);
    console.log("server listening on port "+port);
    setInterval(getTemps, 10000);
});