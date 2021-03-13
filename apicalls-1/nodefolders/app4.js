const fs = require('fs');
const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url);

    res.setHeader('Content-Type', 'text/html');
    let urll = './views/';

    if(req.url == '/'){
        urll += 'index.html';
    }
    else if(req.url == '/about'){
        urll += 'about.html';
    }
    else{
        urll += '404.html';
    }

    fs.readFile(urll,(err, data) =>{
        if(err){
            console.log(err);
            res.end();
        }else{
            res.end(data);
        }
    });
});

server.listen(8008, 'localhost', () =>{
    console.log('listening');
});