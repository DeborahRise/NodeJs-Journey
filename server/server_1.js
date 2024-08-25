import http from 'http';
const PORT = process.env.PORT;


const server = http.createServer((req, res) => {

    res.writeHead(500, {'Content-Type': 'application/json'});
    res.end(JSON.stringify({message: 'Server Error'}));

});

server.listen(PORT, () => {
    console.log(`Baby Server running on ${PORT}`);
});