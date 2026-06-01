const http = require('http');
const express = require('express');
const app = express();

app.use(express.static("public"));
// 사용자 목록
let userList = [
    {user: 'user01', message: 'message01'},
    {user: 'user02', message: 'message02'}
];
// 목록에 새 데이터 추가
app.get('/data', (req, res) => {
    userList.push(req.query);
    res.redirect('/');
});
// 목록 출력
app.get('/', (req, res) => {
    res.send(userList);
});

const server = http.createServer(app);
server.listen(3000, ()=> {
    console.log("Nodejs Server ...")
});
