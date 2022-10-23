const port = process.argv[2];
const http = require("http");
const map = require("through2-map");
// $ npm install through2-map
// through2-map은 데이터의 덩어리를 받아 데이터의 덩어리를 반환하는 한 개의 함수만으로 변환 스트림을 만들 수 있다.
const server = http.createServer(function (request, response) {
  if (request.method !== "POST") return response.end("send me a POST\n");
  request
    .pipe(
      map(function (chunk) {
        return chunk.toString().toUpperCase();
      })
    )
    .pipe(response);
});
server.listen(port);
