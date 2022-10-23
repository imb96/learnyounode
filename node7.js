const http = require("http");
const url = process.argv[2];

http.get(url, function (response) {
  response.setEncoding("utf8");
  response.on("data", function (data) {
    console.log(data);
  });
});

/**
 * // http.get()메소드는 간단한 GET요청의 단축키. 첫 번째 인자는 GET해야할 URL, 두번 째 인자는 콜백.
 * // response 객체는 Node 스트림 객체에 있다. Node 스트림을 이벤트를 발생하는 객체로 취급할 수 있다.
 * // 가장 흥미로운 이벤트는 'data', 'error', 'end'
 * // 이벤트는 이런 식으로 감시할 수 있다.
 * // response.on('data', function (data) {...})
 * // 'data' 이벤트는 데이터의 덩어리가 있고 처리할 수 있을 때 발생
 * // response 객체/ http.get() 에서 가져온 스트림도 setEncoding() 메소드를 가지고 있으며 이 메소드를 'utf8'과 함께 호출하면 'data' 이벤트가 명시적으로 문자열로 변환해야 하는 일반 Node Buffer 객체가 아닌 문자열을 생성한다.
 *
 * // official solution
 * const http = require('http')
 * http.get(process.argv[2], function (response) {
 *  response.setEncoding('utf8');
 *  response.on('data', console.log)
 *  response.on('error', console.error)
 * }).on('error', console.error)
 */
