import url, { URLSearchParams } from 'url';

const urlstring = 'http://www.google.com/search?q=hello+world';

// url Object
const urlobj = new URL(urlstring);
console.log(urlobj);

// format()
console.log(url.format(urlobj));

// import.meta.url
console.log(import.meta.url)
const metaurl = url.fileURLToPath(import.meta.url);
console.log(metaurl);

//to get individual objects from string
console.log(urlobj.hostname);

//to get an object of the search parameter precisely
const params = new URLSearchParams(urlobj.search);


// to add, get, delete more search parameters to url
params.append('Tosy', 'Debie');
params.append('Tory', 'Duby');
params.delete('Tory')
console.log(params);
console.log(params.get('Tosy'));