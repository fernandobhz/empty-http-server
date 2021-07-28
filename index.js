require("http")
  .createServer((req, res) => res.writeHead(200).end("ok"))
  .listen(process.env.PORT || 3000);
