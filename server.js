import http from 'http';
const PORT = 8000;


const server = http.createServer((req, res) => {
    res.end('Hello world');

});

server.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});