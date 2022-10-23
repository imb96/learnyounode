let sum = 0;
// 전역 process 객체를 통해 커맨드 라인 인자에 접근할 수 있다. process객체는 argv라는 모든 커맨드 라인을 가지고 있는 배열 속성을 가지고 있다.
// process.argv 배열의 첫번쨰 요소는 항상 'node', 두번째 요소는 항상 파일의 경로
for (let i = 2; i < process.argv.length; i++) {
  sum += +process.argv[i];
}
console.log(sum);
