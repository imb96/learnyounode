### Buffer

Buffer 객체는 고정 길이의 바이트 시퀀스를 나타내는데 사용된다. 많은 Node.js API가 Buffers를 지원한다.
Buffer 클래스는 JavaScript의 하위 클래스이며 전역 범위 내에서 사용할 수 있지만 import 또는 require문을 통해 명시적으로 참조하는 것이 좋다.
binarydata들의 stream을 직접 다루기 위한 Node.js API
한 작업이 데이터를 처리하는 시간이 데이터가 도착하는 시간보다 빠르다면, 먼저 도착한 데이터는 처리되기 전에 어느정도의 데이터량이 쌓일때까지 기다려야 한다. 이 때 기다리는 영역이 'buffer'

### Stream

Node.js에서 스트리밍 데이터 작업을 위한 추상 인터페이스.
Node.js에서 제공하는 많은 스트림 객체가 있다. 예를 들어 HTTP 서버에 대한 요청, process.stdout 둘다 스트림 인스턴스이다.
스트림은 읽기, 쓰기 또는 둘다 일 수 있다. 모든 스트림은 EventEmitter의 인스턴스이다.

### Stream.pipe()

HTTP 연결은 스트림이고 열린 파일은 스트림이다. 스트림은 노드의 I/O 추상화이다. stream.pipe() 스트림은 매우 편리한 추상화를 제공하며 이를 사용하여 수행할 수 있는 작업이 많이 있다.
