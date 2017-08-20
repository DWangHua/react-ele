const http = require('http');

const { goods, sellers, ratings } = require('./data');

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});
    if (req.url && req.url === '/api/goods') {
        res.end(JSON.stringify({
          errno: 0,
          data: goods
        }), 'utf-8');
    } else if (req.url && req.url === '/api/seller') {
        res.end(JSON.stringify({
          errno: 0,
          data: sellers
        }), 'utf-8');
    } else if (req.url && req.url === '/api/ratings') {
        res.end(JSON.stringify({
          errno: 0,
          data: ratings
        }), 'utf-8');
    }
}).listen(9000);