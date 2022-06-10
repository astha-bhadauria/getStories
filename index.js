const http = require("http");
const url = require("url");
let jsondata = require("./data.json");
const server = http.createServer((req, res) => {
  const path = req.url;
  if (path === "/getTimeStories") {
    res.write("<h1 >TIME </h1>");

    jsondata.forEach((item) => {
      let m = JSON.stringify(item.title);
      let t = m.split("/n");

      console.log(item);
      let x = JSON.stringify(item.title);
      res.write(`<h4 style="color:red;">` + x + `</h4>`);
      res.write("<br></br>");
      res.write(JSON.stringify(item.link));
      res.write("<br></br>");
    });
    res.end();
  } else
    res.writeHead(404, {
      "Content-type": "text/html",
      "my-own-header": "hello-world",
    });
  res.end("<h1> Page not found </h1>");
});

server.listen(7066, () => {
  console.log("Listening");
});
