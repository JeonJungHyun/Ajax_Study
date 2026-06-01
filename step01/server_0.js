const http = require('http');
const express = require('express');
const app = express();

list = [];

// 서버 설정 (app.set())

// 미들웨어 설정 (app.use())
// http://localhost:3000/ajax_ex01.html 로 public 폴더 내부 접근 가능.
app.use(express.static("public"));

app.get('/data', (req, res) => {
    // 쿼리 스트링 데이터 처리
    console.log(req.query);
    let user = req.query.user;
    let message = req.query.message;

    let obj = {
        user: user,
        message: message
    }

    list.push(obj);
    res.send(list);
});

app.get('/', (req, res) => {
    // send(), end(), json(), redirect() ...
    res.end("<h1>Hello express world</h1>");
});

const server = http.createServer(app);

server.listen(3000, ()=> {
    console.log("Nodejs Server ...")
});