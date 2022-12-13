const fs = require ("fs")
const http = require("http")

module.exports = {
    date(){
        process.stdout.write(Date());
        process.stdout.write("\nprompt > ");
    },
    pwd(){
        process.stdout.write(process.cwd());
        process.stdout.write("\nprompt > ");
    }, 
    ls(){
        fs.readdir(".", function(err, files){
            if (err) throw err;
  files.forEach(function(file) {
    process.stdout.write(file.toString() + "\n");
  })
  process.stdout.write("prompt > ");
}); 
    },
    echo(input){
        process.stdout.write(input);
        process.stdout.write("\nprompt > ");
    },
    cat(filename){
        fs.readFile("./" + filename, (err, data)=>{
            if (err) throw err;
            process.stdout.write(data);
            process.stdout.write("\nprompt > ");
        })
    },
    head(filename){
        fs.readFile("./" +filename, "utf-8",(err, data)=>{
            if (err) throw err;
            data= data.split("/n").slice(0,3).join("/n")
            process.stdout.write(data);
            process.stdout.write("\nprompt > ");
        })
    },
    tail(filename){
        
        fs.readFile("./" +filename, "utf-8",(err, data)=>{
            if (err) throw err;
            data= data.split("/n").slice(-3).join("/n")
            process.stdout.write(data);
            process.stdout.write("\nprompt > ");
        })
    },
    curl(url){
        const req = http.request(url, {method:"GET"}, res =>{
            res.on("data", data =>{
                process.stdout.write(data)
                process.stdout.write("\nprompt > ");
            });
        });
        req.on("error", e=>{
            throw e;
        });
        req.end();
    }

}