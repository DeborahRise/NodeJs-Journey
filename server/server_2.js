import http from 'http';
const PORT = process.env.PORT;


const server = http.createServer((req, res) => {
    
    // CREATING A SIMPLE ROUTER:
    if (req.url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.end('homepage');
    }
    else if (req.url ==='/about') {
        res.setHeader('Content-Type', 'text/html');
        res.end('About');
    }
    else {
        res.setHeader('Content-Type', 'text/html');
        res.end('Not Found');
    }
   

});

server.listen(PORT, () => {
    console.log(`Bab123443221y Server running on ${PORT}`);
});
