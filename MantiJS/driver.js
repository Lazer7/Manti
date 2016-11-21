var express = require('express');
var app = express();

app.set('view engine', 'pug');
app.set('views','./../MantiPug');


app.get('/mainpage', function(req, res){
    console.log('success');
    res.render('mainPage');
});


app.listen(3000);