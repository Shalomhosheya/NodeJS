import http from 'http';
// import fs from 'fs';
// const server = http.createServer((req,res) => {
//     console.log(req.url,req.method);
//     fs.writeFileSync('demo.text',( req.url+':' + req.method));
//     process.exit();
// });import http from 'http';
// const server = http.createServer((req,res)=>{
//     console.log(req.url, req.method);
//     if(req.url === "/add"){
//         res.setHeader('content-type','text.html')
//         res.write('<html><head><h1>Add Customer</h1></head></html>')
//         return res.end
//     }else{
//         res.setHeader('content-type','text.html')
//         res.write('<html><head><h1>Dashboard</h1></head></html>')
//         res.end
//     }
//     if(req.url === "/item"&& req.method === "POST"){
//         res.write('Items List')
//         res.end();
//     }
// });
const server = http.createServer((req, res) => {
    console.log(req.url, req.method);
    if (req.url === "/add") {
        res.setHeader('content-type', 'text.html');
        res.write('<html><body><form action="/items" method ="POST"><input type="text"name="item"/><button type="submit">Submit</butto ></form></body></html>');
        res.end;
    }
    if (req.url === "/item" && req.method === "POST") {
        res.write('Items List');
        res.end();
    }
});
server.listen(3000);
