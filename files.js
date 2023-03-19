//crud using node
const fs = require('fs');
//reading a file

fs.readFile('./docs/docs.txt',(err,data) => {
    if(err) {
        console.log(err);
    }
    console.log(data.toString());
});



console.log('last line'); //to prove that readFile fn is asynchronous

// write in a file

fs.writeFile('./docs/docs.txt','hello ,joshi',() => {
console.log('File was written');
});


//creating a file
fs.writeFile('./docs/docs1.txt','hello ,anuj',() => { //call back fn
    console.log('File was written');
    });
    
// directories

if(!fs.existsSync('./assets')) {
    fs.mkdir('./assets',(err) => {
    if(err) {
        console.log(err);
    }
    console.log('folder created');  
    });
} else {
    fs.rmdir('./assets',(err) => {
        if(err) {
            console.log(err);
        }

        console.log('folder created');
    })

}


// deleting a file

if(fs.existsSync('./docs/deleteme.txt')) {
    fs.unlink('./docs/deleteme.txt',(err) => {
        if(err) {
            console.log(err);
        }
        console.log('file deleted');
    });


}