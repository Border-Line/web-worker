// self代表子线程自身
// 接收主线程消息
self.addEventListener('message', function (e) {
    console.log('woker---------------' + e.data)
    console.log('received')
    self.postMessage('I am web worker');
    // self.close() 关闭自身
}, false);

// 浏览器需要轮询服务器状态，以便第一时间得知状态改变。这个工作可以放在 Worker 里面。
// Worker 线程内部还能再新建 Worker 线程（目前只有 Firefox 浏览器支持）。下面的例子是将一个计算密集的任务，分配到10个 Worker。
