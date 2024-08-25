// import fs, { appendFile, appendFileSync, readFile, readFileSync } from 'fs';
// import { writeFile } from 'fs';
import fs from 'fs/promises';

// readFile() - call back - default
// fs.readFile('./text.txt', 'utf8', (err, data) => {
//     if (err) throw new Error;
//     console.log(data);
// })

// The Sync method
// const filename = fs.readFileSync('./text.txt', 'Utf8');
// console.log(filename);

// const filename2 = fs.writeFileSync('./text.txt', '/n That you wanna');
// console.log(filename2);

//  Promise version
// fs.readFile('./text.txt', 'utf8')
// .then((data) => console.log(data))
// .catch((err) => console.log(err));

// The Async / await method
const fsreadfile = async () => {
   try {
    const asyncreadfile = await fs.readFile('./text.txt', 'utf8');
    console.log(asyncreadfile);
} catch (error) { console.log(error)  }
}; 
fsreadfile();

// write file

const fswritefile = async () => {
    try {
        await fs.writeFile('./newtext.txt', "i am another new file")
        await fs.appendFile('./newtext.txt', '\nnew append');
        console.log('writing to newfile');
    } catch (error) {
        console.log(error);
    }
}
fswritefile();
fsreadfile();