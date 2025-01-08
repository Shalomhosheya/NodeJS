import http from 'http';
// const server = http.createServer((req,res) => {
//     console.log(req.url,req.method);
//     fs.writeFileSync('demo.text',( req.url+':' + req.method));
//     process.exit();
// });
const server = http.createServer((req, res) => {
    console.log(req.url, req.method);
    res.setHeader('Content-Type', 'text/html');
    res.write('<html><head><h1>Hello world</h1></head></html>');
    res.end();
    process.exit();
});
server.listen(3000);
