let wk = new Worker('worker.js')

// 发信息
wk.postMessage('I am main line')
wk.postMessage({ method: 'echo', args: ['Who are you ?'] })

// 接收 worker 的消息
wk.onmessage = function (e) {
    console.log('main---------------')
    console.log(e.data)
}
// worker发生错误监听
wk.onerror(function (event) {
    console.log([
      'ERROR: Line ', e.lineno, ' in ', e.filename, ': ', e.message
    ].join(''));
  });
// 关闭
wk.terminate();

