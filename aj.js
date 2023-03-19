const fs = require('fs');

fs.readFile('./docs/docs.txt',(err,data) => {
    if(err) {
        console.log(err);
    }
    console.log(data.toString());
});

// writing
fs.writeFile('./docs/docs1.txt','i am aj',() => {
    console.log('written');
});
// creating file is same as writing bas usme file name new dedo create hojyega
//creating dir / folder

if(!fs.existsSync('./assets')) {
    fs.mkdir('./assets',(err) => {
        if(err) {
            console.log(err);
        }
        //done
    });
    
}
else {
    fs.rmdir('./assets',(err) => {
        if(err) {
            console.log(err);
        }
//done
    })

}



// deleting file

if(fs.existsSync('./docs/docs2.txt')) {
    fs.unlink('./docs/docs2.txt',(err) => {
        if(err) {
            console.log(err);
        }
        //done done
    });

}


// CREATING SERVER

const http = require('http');

const server = http.createServer((req,res) => {
    res.setHeader('Content-Type','text/html');



});


server.listen(3000,'localhost',() => {


});


const express = require('require');

const app = express();
app.listen(300)

app.get('/',(req,res) => {
    res.sendFile('/views/index.html',{root : __dirname});
});

app.use((req,res) => {
    res.status(404).sendFile('/views/404.html',{root:__dirname})
})
