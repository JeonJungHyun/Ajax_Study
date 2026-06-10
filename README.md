# AJAX 학습 예제

Node.js Express 서버와 브라우저 AJAX 요청을 연습하기 위한 예제 프로젝트입니다. `step01` 폴더 안에 서버 코드와 정적 HTML 예제가 들어 있습니다.

## 프로젝트 구조

```text
ajax_work/
└─ step01/
   ├─ server.js
   ├─ server_0.js
   ├─ package.json
   └─ public/
      ├─ ajax_ex01.html
      ├─ ajax_ex02.html
      ├─ ajax_ex03.html
      ├─ ajax_ex04.html
      ├─ ajax_ex05.html
      ├─ ajax_ex06.html
      └─ ajax_ex07axios.html
```

## 실행 방법

1. `step01` 폴더로 이동합니다.

```bash
cd step01
```

2. 의존성이 없다면 설치합니다.

```bash
npm install
```

3. 개발 서버를 실행합니다.

```bash
npm run dev
```

4. 브라우저에서 예제 파일을 엽니다.

```text
http://localhost:3000/ajax_ex01.html
```

서버는 기본적으로 `3000`번 포트에서 실행됩니다.

## 서버 구성

### server.js

현재 실행 스크립트에서 사용하는 메인 서버 파일입니다.

- `public` 폴더를 정적 파일 경로로 사용합니다.
- `GET /data` 요청의 쿼리스트링 값을 `userList` 배열에 추가합니다.
- `GET /` 요청 시 현재 `userList` 목록을 응답합니다.

예시 요청:

```text
http://localhost:3000/data?user=hong&message=hello
```

### server_0.js

초기 실습용 서버 파일입니다. `/data`로 전달된 `user`, `message` 값을 배열에 저장하고 응답하는 기본 흐름을 확인할 수 있습니다.

## 예제 설명

### ajax_ex01.html

`XMLHttpRequest` 객체를 직접 생성해서 `/data`로 GET 요청을 보내는 가장 기본 예제입니다. 응답 문자열을 `JSON.parse()`로 객체로 바꿔 콘솔에서 확인합니다.

### ajax_ex02.html

입력창의 `user`, `message` 값을 읽어 `/data`로 전송합니다. 서버 응답을 받아 화면의 결과 영역에 표시합니다.

### ajax_ex03.html

입력한 값을 서버 배열에 추가하고, 서버에서 받은 목록 전체를 `ul` 목록으로 출력합니다.

### ajax_ex04.html

목록 조회와 데이터 추가를 함수로 분리한 예제입니다.

- 페이지가 열리면 `loadList()`로 서버 목록을 먼저 불러옵니다.
- 버튼을 누르면 `/data`에 새 값을 추가합니다.
- 추가 요청이 끝나면 다시 목록을 불러와 화면을 갱신합니다.

### ajax_ex05.html

외부 API인 JSONPlaceholder의 `todos` 데이터를 `XMLHttpRequest`로 가져와 테이블에 출력하는 연습 예제입니다.

요청 주소:

```text
https://jsonplaceholder.typicode.com/todos
```

현재 코드에서는 콜백 안에서 전달받은 `data` 대신 `this.responseText`를 참조하고 있어 브라우저 실행 시 수정이 필요할 수 있습니다.

### ajax_ex06.html

`fetch()`를 사용해 JSONPlaceholder의 `todos` 데이터를 가져오고, 응답을 `response.json()`으로 변환한 뒤 테이블에 출력합니다.

### ajax_ex07axios.html

Axios CDN을 불러와 `axios.get()`으로 외부 API를 호출하는 예제입니다. 현재는 응답 전체를 콘솔에 출력하는 단계까지 구현되어 있습니다.

## 사용 기술

- Node.js
- Express
- nodemon
- XMLHttpRequest
- Fetch API
- Axios
- JSONPlaceholder 테스트 API

## 학습 포인트

- 정적 파일 서버 구성
- GET 요청과 쿼리스트링 처리
- 브라우저에서 비동기 요청 보내기
- JSON 문자열을 객체와 배열로 변환하기
- 서버 응답 데이터를 DOM에 출력하기
- `XMLHttpRequest`, `fetch`, `axios` 방식 비교하기
