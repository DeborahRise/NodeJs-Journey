import path, { basename } from 'path';
import url from 'url';

//this gives utility to work with, whether or not the file exists in our project

const filepath = './dir/dir2/text.txt';

// basename() - gives the name of the file in a particular path
console.log(path.basename(filepath));

//dirname()
console.log(path.dirname(filepath));

// gives the name of the extension of the file
console.log(path.extname(filepath));

// Makes everything an object
console.log(path.parse(filepath));

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)

console.log(path.join(__dirname, 'public', 'health', basename(filepath)));
