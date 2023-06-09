var http = require('http');
var fs = require
var path = require('path');
http.createServer(function (request, response){
    console.log('request',request.url);
    
    var filePath = '.' + request.url;
    if(filePath == './'){
        filePath = './index.html';
    }

var extname= String(path.extname(filePath)).toLowerCase();
var contentType='text/html';
var mimeTypes={
    '.html': 'text/html',
    '.js': 'text/javascript',
    '.css': 'text/css',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpg',
    '.gif': 'image/gif'
};
fs.readFile(filePatch, function(error, content){
    if (error){
        if(error.code== 'ENOENT'){
            fs.readFile('./404.html', function(error, content){
                response.writeHead(200, {'Content-Type': contenttype});
                response.end(content, 'utf-8');
            });
        }
    }else{
        response.writeHead(200, { 'Content-Type': contentType });
        response.end(content, 'utf-8');
    }
});
}).listen(3000);
console.log('Server running at http:127.0.0.1:3000/');