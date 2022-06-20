// var http = require("http");
// var url = require("url");
// var dt = require("./myModule");

// http
//   .createServer(function (req, res) {
//     res.writeHead(200, { "content-Type": "text/html" });
// res.write("The date and time are currently: " + dt.myDataTime());
// res.write(req.url);
// res.end("Hello WOrld");

//     var q = url.parse(req.url, true).query;
//     var txt = q.year + " " + q.month;

//     res.end(txt);
//   })
//   .listen(8080);

// http
//   .createServer(function (req, res) {
//     res.writeHead(200, { "content-type": text / html });
//     res.end("Hello World");
//   })
//   .listen(8080);

// exports.myDataTime = function () {
//   return Data();
// };

// var http = require("http");
// var fs = require("fs");

// http.createServer(function (req, res) {
// fs.appendFile(
//   "demofile02.html",
//   "Hello This is demo file 02",
//   function (err) {
//     if (err) throw err;
//     console.log("Saved!");
//   }
// );
// fs.open("demofile03.txt", "w", function (err, file) {
//   if (err) throw err;
//   console.log("Saved!");
// });
// fs.unlink("demofile03.txt", function (err) {
//   if (err) throw err;
//   console.log("file deleted");
// });
// });
//   .listen(8080);

// const name = "thapa";
// console.log(name);

// const fs = require("fs");

// fs.writeFileSync("read.txt", "welcome to my channel");
// fs.writeFileSync("read.txt", "welcome to my channel, welcome again");

// fs.appendFileSync("read.txt", "hello this is nitins");

// fs.readFileSync("read.txt");
// const buf_data = fs.readFileSync("read.txt");
// console.log(buf_data);

// org_data = buf_data.toString();

// console.log(org_data);

// fs.renameSync("read.txt", "readwrite.txt");

// const fs = require("fs");

// const readFileData = fs.readFile("readwrite.txt", "content-type"= "txt/html")

// console.log(readFileData);
// fs.readFile("readwrite.txt", "utf8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// fs.rm("readwrite.txt");
// fs.writeFileSync("readwrite.txt", "hello welcome again in this file");

// fs.readFile("readwrite.txt", "utf8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// const fs = require("fs");

// fs.writeFile("read.txt", "today is my day :", (err) => {
//   console.log("file is created");
// });

// fs.appendFile("read.txt", "this is write by nitins", (err) => {
//   console.log("taks is complete");
// });

// fs.readFile("read.txt", "utf8", (err, data) => {
//   console.log(data);
// });

// const fs = require("fs");
// const data = fs.readFileSync("read.txt", "utf8");
// console.log(data);
// fs.readFile("read.txt", "utf8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });
// console.log("after the data");

// fs.mkdir("thapa", (err) => {
//   console.log("folder Created!");
// });
// fs.writeFile("thapa/read.txt", "this file is in the folder thapa", (err) => {
//   console.log("file is created!");
// });

// fs.appendFile("./thapa/read.txt", " this is second line", (err) => {
//   console.log("file is updated!");
// });

// fs.readFile("./thapa/read.txt", "utf8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// fs.rename("./thapa/read.txt", "./thapa/mybio.txt", (err) => {
//   console.log("Rename the file");
// });

// fs.unlink("./thapa/mybio.txt", (err) => {
//   console.log("file is deleted");
// });

// fs.rmdir("./thapa", (err) => {
//   console.log("folder is deleted");
// });

// const os = require("os");
// console.log(os.arch());
// const freeMemory = os.totalmem();
// console.log(`${freeMemory / 1024 / 1024 / 1024}`);

// console.log(os.hostname());
// console.log(os.platform());

// console.log(os.tmpdir());

// console.log(os.type());

// const path = require("path");

// console.log(path.dirname("D:/React JS Folder/Learn nodejs/myfile.js"));

// console.log(path.extname("myfile.js"));
// console.log(path.basename("D:/React JS Folder/Learn nodejs/myfile.js"));

// console.log(path.parse("D:/React JS Folder/Learn nodejs/myfile.js").name);

// const myPath = path.parse("D:/React JS Folder/Learn nodejs/myfile.js");
// console.log(myPath.root);

// console.log(path.join("/foo", "bar", "baz/asdf", "quux", ".."));

// console.log(path.join("foo", "{}", "bar"));

// const name = require("./myModule");

// console.log(add(5, 5));
// console.log(name);

// const { add, sub, name } = require("./myModule");

// console.log(modules);
// console.log(add(5, 5));
// console.log(sub(10, 4));
// console.log(name);
// console.log(add(5, 5));
// console.log(sub(12, 5));
// console.log(add);

// const chalk = require("chalk");

// console.log(chalk.blue);
// console.log(chalk.blue("Hello world!"));

// import chalk from "chalk";
// const chalk = require("chalk");

// console.log(chalk.green.underline.inverse("success"));

// var validator = require("validator");

// const a = validator.isEmail("foo@bar.com");
// console.log(a);

// const res = validator.isEmail("nitin@ns.com");
// console.log(res ? chalk.green.inverse(res) : chalk.red.inverse(res));

// const name = "Nitins";
// console.log(name);

// const http = require("http");
// const url = require("url");

// const server = http.createServer((req, res) => {
//   console.log(req.url);
//   if (req.url == "/") {
//     res.end("Hello from the home side");
//   } else if (req.url == "/about") {
//     res.end("Hello from the about side");
//   } else if (req.url == "/contact") {
//     res.end("Hello from the contact side");
//   } else {
//     res.writeHead(404, { "content-type": "text/html" });
//     res.end("<h1>page not found</h1>");
//   }
// });

// server.listen(8000, "127.0.0.1", () => {
//   console.log("listening to the port no 8000");
// });

// const bioData = {
//   name: "nitin",
//   age: 345,
//   channel: "thapa tech",
// };

// console.log(bioData.channel);

// const jsonData = JSON.stringify(bioData);
// const objData = JSON.parse(jsonData);

// console.log(jsonData);
// console.log(objData);

// console.log(jsonData.channel);

// {"name":"nitin","age":345,"channel":"thapa tech"}

// const bioData = {
//   name: "nitin",
//   age: 345,
//   channel: "thapa tech",
// };

// 1: convert to JSON
// 2: dusre file me add krna
// 3: readfile
// 4: again convert to js obj file
// 5: console.log

// const fs = require("fs");

// const jsonData = JSON.stringify(bioData);

// fs.writeFile("json1.json", jsonData, (err) => {
//   console.log("done");
// });

// fs.readFile("json1.json", "utf8", (err, data) => {
// if (err) throw err;
// console.log(data);
//   const orgData = JSON.parse(data);
//   console.log(data);
//   console.log(orgData);
// });

const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.end("Hello from the home sides");
  }
  //  else if (req.url == "/about") {
  //   res.end("Hello from the about page");
  // } else if (req.url == "/contact") {
  //   res.end("Hello from the contact page");
  // } else if (req.url == "/biome") {
  //   res.end("Hello from the biome page");
  // }
  else if (req.url == "/userapi") {
    fs.readFile("./userapi.json", "utf8", (err, data) => {
      console.log(data);
      const objData = JSON.parse(data);
      res.end(objData[0].name);
    });
  } else {
    res.writeHead(404, { "Content-type": "text/html" });
    res.end("404, page not found");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening to the port no 8000");
});
