var express = require('express');
var app = express();
app.set('view engine', 'pug');
app.set('views','../MantiPug');

    app.get('/first_template',function(req, res){
        res.render('PostPage');        
    });
    
    
app.listen(8081);
