// REST API THE BASICS
import { createServer} from 'http';
import { set } from 'immutable';
import { stringify } from 'querystring';

const PORT = process.env.PORT;
const users = [
    {id: 1, name: 'Tory'},
    {id: 2, name: 'Dub'},
    {id: 3, name: 'Deb'}
]

// 
const server = createServer((req, res) => {
    if (req.url === '/api/users' && req.method === 'GET') {
        res.setHeader('Content-Type', 'application/json');
        res.write(JSON.stringify(users))
        res.end();
    } else if (req.url.match(/\/api\/users\/([0-9]+)/) && req.method === 'GET') {
        // FETCHING a single user, using regex.
        const id = req.url.split('/')[3];
        const user = users.find((user) => user.id === parseInt(id));
        res.setHeader('Content-Type', 'application/json');
        if (user) {
            res.write(JSON.stringify({user}))
        } else {
            res.write(JSON.stringify({message: 'user not found'}))
        }
        res.end();
    } else {
        res.setHeader('Content-Type', 'application/json');
        res.statusCode = 404
        res.write( JSON.stringify({message: 'Not Found'}))
        res.end();
    }
});

server.listen(PORT, () => {
    console.log('Rise Server');
})
