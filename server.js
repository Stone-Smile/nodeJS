var http = require('http');
var fs = require('fs');

// // 了解node内部结构
// http.createServer(function(request, response) {
//   console.log("Request received")
//   response.writeHead(200, {"Content-Type": "text/plain"});
//   response.write("Hello World");
//   response.end();
// }).listen(8888);

// function say (word) {
//   console.log(word)
// }
// function execute(someFunction, value) {
//   someFunction(value)
// }
// execute(say, "hello");

// 封装成组件
// function start () {
//   function onRequest(request, response) {
//     console.log("request received.");
//     response.writeHead(200, {"content-Type": "text/plain"})
//     response.write("hello =")
//     response.end()
//   }
//   http.createServer(onRequest).listen(8888)
//   console.log("Server start")
// }
// exports.start = start

// // 浏览器请求的url路径
// var url = require("url")
// function start() {
//   function onRequest(request, response) {
//     var pathname = url.parse(request.url).pathname
//     console.log("request for" + pathname + "received.")
//     response.writeHead(200, {"content-type": "text/html;charset='utf-8'"})
//     response.write("url 路径") //用中文的话，content-type需要设置成text/html;charset="utf-8"  text/palin
//     response.end()
//   }
//   http.createServer(onRequest).listen(8888)
//   console.log("server has started.")
// }
// exports.start = start

// // 修改start函数， 添加路由
// var url = require('url')
// function start(route) {
//   function onRequest(request, response) {
//     var pathname = url.parse(request.url).pathname;
//     console.log("request for" + pathname + "receive.")
//     route(pathname)
//     response.writeHead(200, {"content-type": "text/plain"})
//     response.write('Hello');
//     response.end()
//   }
//   http.createServer(onRequest).listen(8888)
//   console.log("server has started")
// }
// exports.start = start

// // 修改route函数
// var url = require('url')
// function start(route, handle) {
//   function onRequest(request, response) {
//     var pathname = url.parse(request.url).pathname;
//     console.log("request for" + pathname + "receive.")
//     route(handle, pathname)
//     response.writeHead(200, {"content-type": "text/plain"})
//     response.write('Hello');
//     response.end()
//   }
//   http.createServer(onRequest).listen(8888)
//   console.log("server has started")
// }
// exports.start = start

// // 修改route函数,并加入异常信息处理
// var url = require('url')
// function start(route, handle) {
//   function onRequest(request, response) {
//     var pathname = url.parse(request.url).pathname;
//     console.log("request for" + pathname + "receive.")
//     var content = route(handle, pathname)
//     response.writeHead(200, {"content-type": "text/plain"})
//     response.write(content);
//     response.end()
//   }
//   http.createServer(onRequest).listen(8888)
//   console.log("server has started")
// }
// exports.start = start

// // 将服务器传递给内容方式
// var url = require('url')
// function start(route, handle) {
//   function onRequest(request, response) {
//     var pathname = url.parse(request.url).pathname
//     console.log('request for' + pathname + 'received')
//     route(handle, pathname, response)
//   }
//   http.createServer(onRequest).listen(8888)
//   console.log('server has started')
// }
// exports.start = start

// 处理post请求
var url = require('url')
function start(route, handle) {
  function onRequest(request, response) {
    var postData = ''
    var pathname = url.parse(request.url).pathname
    console.log('request for' + pathname + 'received')
    request.setEncoding('utf8')
    request.addListener('data', function (postDataChunk) {
      postData += postDataChunk
      console.log('received post data chunk' + postDataChunk)
    })
    request.addListener('end', function() {
      route(handle, pathname, response, postData)
    })
  }
  http.createServer(onRequest).listen(8888)
  console.log('server has started')
}
exports.start = start

// var documentRoot = 'C:/Users/Administrator/Desktop/web-export/node'

// var server = http.createServer(function(req, res) {
//   var url = req.url;
//   var file = documentRoot + url
//   console.log(url)

//   fs.readFile(file, function(err, data) {
//     if (err) {
//       res.writeHead(404, {
//         'content-type': 'text/html;charset="utf-8"'
//       })
//       res.write('<h1>404错误</h1><p>你找的页面不存在哦</p>')
//       res.end()
//     } else {
//       res.writeHead(200, {
//         'content-type': 'text/html;charset="utf-8"'
//       })
//       res.write(data)
//       res.end()
//     }
//   })
// }).listen(8888)
console.log('服务器开启成功')