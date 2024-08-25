//FROM SERVER 6 USING THE MIDDLEWARE LOGGER AND CLEANING UP
import { createServer} from 'http';

const PORT = process.env.PORT;

const users = [
    {id: 1, name: 'Tory'},
    {id: 2, name: 'Dub'},
    {id: 3, name: 'Deb'}
]

// Logger middleware
const logger = (req, res, next) => {
     console.log(`${req.url }, ${req.method}`);
     next();
}

// JSON middleware Cleanup
const appjson = (req, res, next) => {
    res.setHeader('Content-Type', 'application/json');
    next();
}

// GET /api/users request handler
const GETusershandler = (req, res) => {
    res.write(JSON.stringify(users));
    res.end();
}

// GET /api/user/id request handler
const GETuserbyid = (req, res) => {
    const id = req.url.split('/')[3];
    const user = users.find((user) => user.id === parseInt(id));
    if (user) {
        res.write(JSON.stringify({user}))
    } else {
        res.write(JSON.stringify({message: 'User not found'}))
    }
    res.end();
}

// Not Found Handler
const notFoundHandler = (req, res) => {
    res.statusCode = 404
    res.write( JSON.stringify({message: 'Not Found'}))
    res.end();
}
const server = createServer((req, res) => {
    logger(req, res, () => {
        appjson(req, res, () => {
            if (req.url === '/api/users' && req.method === 'GET') {
                GETusershandler(req, res);
            } else if (req.url.match(/\/api\/users\/([0-9]+)/) && req.method === 'GET') {
                GETuserbyid(req,res);
            }  else {
                notFoundHandler(req, res);
            }
        })
    });    
});

server.listen(PORT, () => {
    console.log('Rise Server');
});
