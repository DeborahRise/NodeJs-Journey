import http from 'http';
const PORT = 8000;


const server = http.createServer((req, res) => {
    res.end('Hey Baby world');

});

server.listen(PORT, () => {
    console.log(`Baby Server running on ${PORT}`);
});