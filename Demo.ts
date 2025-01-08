import http from 'http';
// import fs from 'fs';

// const server = http.createServer((req,res) => {
//     console.log(req.url,req.method);
//     fs.writeFileSync('demo.text',( req.url+':' + req.method));
//     process.exit();
// });
const server = http.createServer((req,res) => {
    
    if(req.url === '/add'){
        console.log(req.url,req.method);
        res.setHeader('Content-Type', 'text/html');
        res.write('<html><head><h1>Add Customer Form</h1></head></html>');
        res.end();
        process.exit();
    }else{
        console.log(req.url,req.method);
        res.setHeader('Content-Type', 'text/html');
        res.write('<html><head><h1>Add Customer Form</h1></head></html>');
        res.end();
        process.exit();
    }
});
server.listen(3000);