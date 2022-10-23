/**
 * 1. 설명한 인자만 받는 함수를 하나만 export 해야 한다.
 * 2. 설명된 에러나 데이터로 콜백은 한 번만 호출
 * 3. 전역 변수나 표준출력(stdout) 같은 다른 건 아무것도 바꾸면 안된다.
 * 4. 가능한 모든 에러를 처리해 콜백으로 넘겨야 한다.
 */
const fs = require("fs");
const path = require("path");

module.exports = function (dir, ext, callback) {
  fs.readdir(dir, function (err, data) {
    if (err) return callback(err); // 빠른 반환
    // 에러가 없을 때
    data = data.filter(function (file) {
      return path.extname(file) === "." + ext;
    });
    // error 처리. 대해 콜백에 'null'를 인수로 넘김
    callback(null, data);
  });
};
