const fs = require('fs');

const readStream = fs.createReadStream('./docs/stream.txt',{encoding : 'utf8'});
const writeStream = fs.createWriteStream('./docs/stream1.txt');

readStream.on('data',(chunk) => {
console.log("----- NEW CHUNK -----");
console.log(chunk);
writeStream.write("\n NEW CHUNK \n ");
writeStream.write(chunk);
});

//piping same thing as above
readStream.pipe(writeStream);

