import http from 'http';
const PORT = process.env.PORT;


const server = http.createServer((req, res) => {

    //Ensuring it is GET Method strictly
    try {
        if (req.method === 'GET') {
            // CREATING A SIMPLE ROUTER:
            // server_2.js shoulda been res.WriteHead
            if (req.url === '/') {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.end('<h1> homepage</h1>');
            }
            else if (req.url ==='/about') {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.end('<h1> About</h1>');
            }
            else {
                res.writeHead(404, {'Content-Type': 'text/html'});
                res.end('<h1> Not Found</h1>');
            }
        } else {
            throw new Error('<h1> Method Not Allowed</h1>'); 
        }
    } catch (error) {
        res.writeHead(500, {'Content-Type': 'text/html'});
                    res.end('<h1> Method Not Allowed</h1>');
    }

    
   

});

server.listen(PORT, () => {
    console.log(`Bab123443221y Server running on ${PORT}`);
});