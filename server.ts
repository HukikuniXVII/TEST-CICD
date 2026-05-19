// minimal HTTP server
const http = require('http');
const PORT = process.env.PORT || 3000;
const VERSION = process.env.APP_VERSION || 'dev';

http.createServer((req, res) => {
    if (req.url === '/healthz') {
        res.end('okkk');
        return;
    }
    res.end(`hello! version=${VERSION}`);
}).listen(PORT, () => {
    console.log(`listening on ${PORT}, v=${VERSION}`);
});