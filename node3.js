const fs = require("fs"); // 파일 시스템 연산을 수행하기 위해 Node 핵심 모듈의 fs 모듈불러오기
// fs 모듈 안의 모든 동기(블록킹) 파일 시스템 메소드는 'Sync'로 끝난다.
const buf = fs.readFileSync(process.argv[2]); // 파일의 모든 내용을 담고 있는 Buffer 객체 반환.
// Buffer 객체는 효과적으로 임의의 배열 (ascii, 바이너리나 다른 형식의) 데이터를 나타내는 Node의 방법.
const str = buf.toString(); // 문자열로 변환
console.log(str.split("\n").length - 1);
// note you can avoid the .toString() by passing 'utf8' as the
// second argument to readFileSync, then you'll get a String!
// 참고: FileSync의 두 번째 인자로 'utf8'을 전달하면 .toString()을 사용하지 않고 문자열로 반환할 수 있다.
// fs.readFileSync(process.argv[2], 'utf8').split('\n').length -
