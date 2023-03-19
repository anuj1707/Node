const express = require('express');


// express app

const app = express();

//listen for requests
app.listen(3000); // 3000 is our port number

app.get('/',(req,res) => {
    
    // res.send('<p>Home page</p>');
    // for sending a html file in response we can directly use sendFile method
    res.sendFile('./views/index.html',{ root : __dirname}) ; // we will second parameter bcoz in this method the server reads the first param as absolute path so to tell its relative path we use second param

});

app.get('/about',(req,res) => {
    
    // res.send('<p>About page</p>');
    res.sendFile('./views/about.html', {root : __dirname});
});
//redirect
app.get('/about-us',(req,res) => {
    res.redirect('/about');
});
//404 this code will run if all the above app.get didnt run or url doesnt match
app.use((req,res) => {
    res.status(404).sendFile('./views/404.html',{root : __dirname});    
});

