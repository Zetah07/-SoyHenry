const commands = require("./commands");

function done(output){
    process.stdout.write(output);
    process.stdout.write("\nprompt > ");
}


// Output un prompt
process.stdout.write("prompt > ");
// El evento stdin 'data' se dispara cuando el user escribe una línea
process.stdin.on("data", function (data) {
  let userInput = data.toString().trim().split(" ");
  let cmd =userInput.shift();
  let args = userInput.join(" ");
  if (commands[cmd]) commands[cmd](args);
  else process.stdout.write("You typed: " + cmd);
  process.stdout.write("\nprompt > ");
});
