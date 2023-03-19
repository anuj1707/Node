// how to create a server in node js
const  fs  = require('fs');
const http = require('http');
const _ = require('lodash');

const server = http.createServer((req,res) => {
//console.log(req.url,req.method);

//lodash
const num = _.random(0,20);
console.log(num);

const greet = _.once(() => {
    console.log('hello');
})
greet();
greet();

//set header content type
res.setHeader('Content-Type','text/html');

let path = './views/';
switch(req.url) {
    case '/' :
        path += 'index.html';
        res.statusCode = 200;
        break;
    case '/about' :
        path += 'about.html';
        res.statusCode = 200;
        break;
    case '/about-us' :
        res.statusCode = 301; // redirect status code
        res.setHeader('Location','/about');
        res.end();
        break;
    default : 
        path += '404.html';
        res.statusCode = 404;
        break;
}


//send an html file
fs.readFile(path,(err,data) => {
if(err) {
    console.log(err);
    res.end();
}else {
   res.write(data);
    res.end();
}
})
});

// port no.    ,  localhost
server.listen(3000,'localhost', () =>  {  
console.log('listening for request at port 3000');
});



