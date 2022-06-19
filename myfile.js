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
