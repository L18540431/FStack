// Llamamos el módulo http
const http = require('http');
//Establecemos la url o IP de nuestro servidor
const hostname = '192.168.56.1';
//Establecemos el puerto de escucha
const port = 3000;
//Creamos una instancia HTTP con un reques y un response
const server = http.createServer((req, res) => {
    //El servidor responderá un código 200
    res.statusCode = 200;
    //El servidor responderá con un texto plano
    res.setHeader('Content-Type', 'text/plain');
    //El servidor responderá el mensaje hola mundo
    res.end('Hola Mundo\n');
});

server.listen(port, hostname, () => {
    console.log('El servidor se está ejecutando en http://${hostname}:${port}/');
})