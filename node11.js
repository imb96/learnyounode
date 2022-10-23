const port = +process.argv[2];
const file = process.argv[3];
const http = require("http");
const fs = require("fs");
const server = http.createServer(function (request, response) {
  // request handling logic
  response.writeHead(200, { "content-type": "text/plain" });
  // response.writeHead() 속성은 요청에 응답 헤더를 보내는 'http'모듈의 내장 속성이다.
  // 상태코드는 404와 같은 3자리 HTTP 상태 코드이다. 마지막 인수인 headers는 응답 헤더이다.
  // 선택적으로 사람이 읽을 수 있도록 statusMessage를 두 번쨰 인수로 제공할 수 있다.
  const src = fs.createReadStream(file);
  src.pipe(response);
});
server.listen(port);
