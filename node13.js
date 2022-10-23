const http = require("http");
const port = +process.argv[2];
const server = http.createServer(function (request, response) {
  if (request.method !== "GET") response.end();

  const url = new URL(request.url, `http://localhost:${port}`);
  const iso = url.searchParams.get("iso");
  const date = new Date(iso);

  let result;

  if (url.pathname === "/api/parsetime") {
    result = {
      hour: date.getHours(),
      minute: date.getMinutes(),
      second: date.getSeconds(),
    };
  } else if (url.pathname === "/api/unixtime") {
    result = {
      unixtime: date.getTime(),
    };
  }

  if (result) {
    response.writeHead(200, { "Content-Type": "application/json" });
    response.end(JSON.stringify(result));
  } else {
    response.writeHead(404);
    response.end();
  }
});

server.listen(port);

/**
 * official solution
 * const http = require('http');
 *
 * function parseTime(time) {
 *  return {
 *    hour: time.getHours(),
 *    minute: time.getMinutes(),
 *    second: time.getSeconds()
 *  }
 * }
 *
 * function unixtime (time) {
 *  return { unixtime: time.getTime() }
 * }
 *
 * const server = http.createServer(function (req, res) {
 *  const parsedUrl = new URL(req.url, 'http://example.com')
 *  const time = new Date(parsedUrl.searchParams.get('iso'))
 *  let result
 *
 *  if(/^\/api\/parsetime/.test(req.url)) {
 *    result = parsetime(time)
 *   } else if (/^\/api\/unixtime/.test(req.url)) {
 *    result = unixtime(time)
 *  }
 *
 *  if(result) {
 *    res.writeHead(200, {'Content-Type': 'application/json'})
 *    res.end(JSON.stringify(result))
 *  } else {
 *    res.writeHead(404);
 *    res.end()
 *  }
 * })
 * server.listen(Number(process.argv[2]))
 */
