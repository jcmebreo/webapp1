const fs = require('fs');
const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url);

    res.setHeader('Content-Type', 'text/html');
    let urll = './views/';

    if(req.url == '/'){
        urll += 'index.html';
        res.statusCode == 200;
    }
    else if(req.url == '/about'){
        urll += 'about.html';
        res.statusCode == 200;
    }
    else if(req.url == '/contactus'){
        urll += 'contactUs.html';
        res.statusCode == 200;
    }
    else{
        urll += '404.html';
        res.statusCode == 404;
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