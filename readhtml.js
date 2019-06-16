// // 1: モジュールのロード
// const http = require('http');
// const fs = require('fs');

// // 2: サーバーオブジェクトの作成
// const server = http.createServer((req,res) => {
//     // 3: ファイル読み込み
//     fs.readFile('index.html', 'UTF-8',
//     (error, data) => {
// 	    res.writeHead(200, {'Content-Type':'text/html'});
// 	    res.write(data);
// 	    res.end();
//     });
// });

// // 4:待ち受け開始
// server.listen(8000);
// console.log('Server running');
