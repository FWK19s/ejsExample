const http = require('http');
const express = require('express');
const path = require('path');
const ejs = require('ejs');

const app = express();
app.use('/static', express.static('public'));
app.set('view engine', 'ejs');

app.get('/:userQuery', function(req, ejs){
    // res.sendFile(path.join(__dirname, '/index.html'));
    ejs.render('index', {data : {userQuery: req.params.userQuery, 
                        searchResults: ['book1', 'book2', 'book3']}});    
});
app.listen(8080);