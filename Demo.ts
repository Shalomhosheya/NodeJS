import http from 'http';
import fs from 'fs';
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

// const server = http.createServer((req,res)=>{
//     console.log(req.url, req.method);

//     if(req.url === "/add"){
//                 res.setHeader('content-type','text.html')
//                 res.write('<html><body><form action="/items" method ="POST"><input type="text"name="item"/><button type="submit">Submit</butto ></form></body></html>')
//                 res.end
//             }
//     if(req.url === "/item"&& req.method === "POST"){
//         res.write('Items List')
//         res.end();
//     }
// });

// server.listen(3000);


const server = http.createServer((req, res) => {
    console.log(req.url, req.method);

    if (req.url === "/Item" && req.method === "POST") {
        const body: Buffer[] = [];

        req.on('data', (chunk) => {
            body.push(chunk);
        });

        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const item = parsedBody.split('=')[1]; 

            fs.writeFile('item.txt', item, (err) => {
                if (err) {
                    console.error("Error writing to file:", err);
                    res.statusCode = 500;
                    res.end("Internal Server Error");
                } else {
                    res.statusCode = 200;
                    res.write('Item saved successfully');
                    res.end();
                }
            });
        });

        req.on('error', (err) => {
            console.error("Request error:", err);
            res.statusCode = 500;
            res.end("Internal Server Error");
        });
    } else {
        res.statusCode = 404;
        res.end("Not Found");
    }
});

server.listen(3000, () => {
    console.log("Server is listening on port 3000");
});
