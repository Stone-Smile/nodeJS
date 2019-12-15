// function route(pathname) {
//     console.log("About to route a request for" + pathname)
// }
// exports.route = route

// function route(handle, pathname) {
//     console.log('about to route a request for' + pathname)
//     if (typeof handle[pathname] === 'function') {
//         handle[pathname]();
//     } else {
//         console.log('no request handler found for' + pathname)
//     }
// }
// exports.route = route

// // 加入异常返回信息
// function route(handle, pathname) {
//     console.log('about to route a request for' + pathname)
//     if (typeof handle[pathname] === 'function') {
//         return handle[pathname]()
//     } else {
//         console.log('no request handler found for' + pathname)
//         return '404 not found'
//     }
// }
// exports.route = route

// // 将服务器传递给内容方式
// function route(handle, pathname, response) {
//     console.log('about to route a request for' + pathname + 'received')
//     if (typeof handle[pathname] === 'function') {
//         handle[pathname](response)
//     } else {
//         console.log('no request handler found for' + pathname + 'receivedd')
//         response.writeHead(404, {"content-type": "text/plain"})
//         response.write('404 not found')
//         response.end()
//     }
// }
// exports.route = route

// 在upload页面展示用户输入内容
function route(handle, pathname, response, postDate) {
    console.log('about to route a request for' + pathname)
    if (typeof handle[pathname] === 'function') {
        handle[pathname](response, postDate)
    } else {
        console.log('no request handler found for' + pathname)
        response.writeHead(404, {"content-type": "text/plain"})
        response.write('404 not found')
        response.end()
    }
}
exports.route = route