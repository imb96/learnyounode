const net = require("net");
const port = process.argv[2];
function zeroFill(n) {
  return (n < 10 ? "0" : "") + n;
}
function printTime() {
  const date = new Date();
  const year = date.getFullYear();
  const month = zeroFill(date.getMonth() + 1);
  const day = zeroFill(date.getDate());
  const hour = zeroFill(date.getHours());
  const min = zeroFill(date.getMinutes());

  return `${year}-${month}-${day} ${hour}:${min}`;
}

// net모듈: 네트워킹에 관련된 모든 기본 함수들이 들어 있다.
// 콜백함수를 받는 net.createServer()라는 메소드가 있으며 여기서 사용되는 콜백은 한 번 이상 호출된다. 서버가 받는 모든 연결은 매번 콜백을 호출하게 된다.
const server = net
  .createServer(function (socket) {
    // socket handling logic
    socket.write(printTime() + "\n");
    socket.end();
    // socket.end(printTime() + "\n");
  })
  .on("error", console.error);
server.listen(port);
