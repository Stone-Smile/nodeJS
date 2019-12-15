// function start() {
//     console.log('start')
// }
// function upload() {
//     console.log('upload')
// }

// exports.start = start
// exports.upload = upload

// // 加入返回信息
// function start() {
//     console.log('start was called.')
//     return 'hello start'
// }
// function upload() {
//     console.log('upload was called.')
//     return 'hello upload'
// }
// exports.start = start
// exports.upload = upload

// // 模拟阻塞10s情形
// function start() {
//     console.log('start was called')
//     function sleep(milliSeconds) {
//         var startTime = new Date().getTime()
//         while (new Date().getTime() < startTime + milliSeconds);
//     }
//     sleep(10000);
//     return 'hello start'
// }
// function upload() {
//     console.log('upload was called')
//     return 'hello upload'
// }
// exports.start = start
// exports.upload = upload

// // 使用非阻塞，提供callback函数
// var exec = require('child_process').exec
// function start() {
//     console.log('start was called')
//     var content = 'empty'
//     exec('find/', function(err, stdout, stderr) { //ls -lah比find/速度快
//         content = stdout
//     })
//     return content
// }
// function upload() {
//     console.log('upload was called')
//     return 'hello upload'
// }
// exports.start = start
// exports.upload = upload

// // 将服务器传递给内容方式
// var exec = require('child_process').exec
// function start(response) {
//     console.log('start was called')
//     exec('ls -lah', function (err, stdout, stderr) {
//         response.writeHead(200, {"content-type": "text/plain"})
//         response.write(stdout)
//         response.end()
//     })
// }
// function upload(response) {
//     console.log('upload was called')
//     response.writeHead(200, {"content-type": "text/plain"})
//     response.write('hello upload')
//     response.end()
// }
// exports.start = start
// exports.upload = upload

// 处理post请求
// function start(response, postData) {
//     console.log('start was called')
//     var body = '<html>' +
//         '<head>' +
//         '<meta http-equiv="Content-Type" content="text/html;charset="UTF-8">' +
//         '</head>' +
//         '<body>' +
//         '<form action="/upload" method="post">' +
//         '<textarea name="text" rows="20" cols="60"></textarea>' +
//         '<input type="submit" value="Submit text" />' +
//         '</form>' +
//         '</body>' +
//         '<html>'

//         response.writeHead(200, {"Content-Type": "raw"})  //application/x-www-form-urlencoded multipart/form-data
//         response.write(body)
//         response.end()
// }

// function upload(response, postData) {
//     console.log('upload was called')
//     response.writeHead(200, {"Content-Type": "raw"})
//     response.write("you've sent" + postData)
//     response.end()
// }
// exports.start = start
// exports.upload = upload    //说明：upload的内容是转码后的，如何解决？？？？？

// querystring
var querystring = require('querystring')
function start(response, postData) {
    console.log('start was called')
    var body = '<html>' +
        '<head>' +
        '<meta http-equiv="Content-Type" content="text/html;charset="UTF-8">' +
        '</head>' +
        '<body>' +
        '<form action="/upload" method="post">' +
        '<textarea name="text" rows="20" cols="60"></textarea>' +
        '<input type="submit" value="Submit text" />' +
        '</form>' +
        '</body>' +
        '<html>'

        response.writeHead(200, {"Content-Type": "text/html"})  //application/x-www-form-urlencoded multipart/form-data
        response.write(body)
        response.end()
}

function upload(response, postData) {
    console.log('upload was called')
    response.writeHead(200, {"Content-Type": "text/plain"})
    response.write("you've sent" + querystring.parse(postData).text)
    response.end()
}
exports.start = start
exports.upload = upload

