# 複数の猫の画像とポエムを取得して表示するプログラム
## JavaScriptのfetch()の勉強
### 1.Call fetch
### 2.response
### 3.Complete Data Stream
### 4.make an <img> <p> element
- fetch(path) でデータを取得する
- blob()　responseストリームのボディを格納する
- promise ,thenで非同期的に処理していく
- async ,awaitを使ってthenを連結させるよりもシンプルなコードが書ける
    - async Promiseを返すファンクションを明示する 例：async function catchCats()
    - await asyncファンクションと一緒に使う   例：await fetch(__)
- URL.createObjectURL(__) 引数にはFile,Blob,MediaSourceが入る
    - 引数のオブジェクトを表すURLを含むDOMStringを生成する
