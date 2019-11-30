const http = require('http');
const express = require('express');
const path = require('path');

const app = express();
app.use('/static', express.static('public'));
app.set('view engine', 'ejs');

app.get('/:userQuery', function(req, res){
    // res.sendFile(path.join(__dirname, '/index.html'));
    res.render('index', {data : {userQuery: req.params.userQuery}});
});
app.listen(8080);