import http from 'http';
const PORT = process.env.PORT;


const server = http.createServer((req, res) => {

    console.log(req.url);
    console.log(req.method);
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1> Hey sugar world </h1>');

});

server.listen(PORT, () => {
    console.log(`Baby Server running on ${PORT}`);
});