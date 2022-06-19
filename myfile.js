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
