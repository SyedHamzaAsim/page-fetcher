let args = process.argv.splice(2);
const request = require("request")
const fs = require("fs")

let url = args[0];
let file = args[1];

request(`${url}`, (error, response, body) => {
  fs.writeFile(`${file}`, body, (err) => {
    if (err)
      console.log(err);
    else {
      console.log(`Done`);
    }
  });
});