import crypto from 'crypto';

// // provides cryptographic functionalites

// // to hash passwords etc

// const hash = crypto.createHash('sha256');
// hash.update('password1234')
// console.log(hash.digest('hex'));

// //to generate crytographically strong data, crypto bytes can be used.
// // that is random bytes
// crypto.randomBytes(3, (err, buf) => {
//     if (err) throw err;
//     console.log(buf.toString('hex'));
// });

// plain taext to  cypher text using crypto algorithms and keys
// Can only be decryptrd by someone who posses a key.
// an iv can ensure that the resulting cypher text is different for each encrytption even with same key

// createCipheriv & createDecipheriv
 const algorithms = 'aes-256-cbc';
 const key = crypto.randomBytes(32);
 const iv = crypto.randomBytes(16);

const cipher = crypto.createCipheriv(algorithms, key, iv);
let encrypted = cipher.update('secret announcement', 'utf-8', 'hex');
encrypted += cipher.final('hex');
console.log(encrypted);

const decipher = crypto.createDecipheriv(algorithms, key, iv);
let decrypted = decipher.update(encrypted, 'hex', 'utf-8');
decrypted += decipher.final('utf-8');
console.log(decrypted);
