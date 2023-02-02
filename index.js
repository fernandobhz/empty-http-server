#!/usr/bin/env node
require("http")
  .createServer((req, res) => res.writeHead(200).end(new Date().toISOString()))
  .listen(process.argv[2] || process.env.PORT || 3000);
