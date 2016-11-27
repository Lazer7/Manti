var express = require('express');
var app = express();


app.set('view engine', 'pug');
app.set('views','./../MantiPug');

app.use(express.static('../../Manti'));


app.get('/mainpage', function(req, res){
    console.log('success');
    res.render('mainPage');
});


app.get('/anime', function(req, res){
        
        console.log('success');
        res.render('subPage', {subPageName: 'anime'});
        });

app.get('/coding', function(req, res){
        
        console.log('success');
        res.render('subPage', {subPageName: 'coding'});
        });

app.get('/food', function(req, res){
        
        console.log('success');
        res.render('subPage', {subPageName: 'food'});
        });

app.get('/gaming', function(req, res){
        
        console.log('success');
        res.render('subPage', {subPageName: 'gaming'});
        });

app.get('/movies', function(req, res){
        
        console.log('success');
        res.render('subPage', {subPageName: 'movies'});
        });

app.get('/news', function(req, res){
        
        console.log('success');
        res.render('subPage', {subPageName: 'news'});
        });

app.get('/philosophy', function(req, res){
        
        console.log('success');
        res.render('subPage', {subPageName: 'philosophy'});
        });

app.get('/ScienceAndTechnology', function(req, res){
        
        console.log('success');
        res.render('subPage', {subPageName: 'Science and Technology'});
        });

app.get('/CodingHelp', function(req, res){
        
        console.log('success');
        res.render('subPage', {subPageName: 'Coding Help'});
        });
    


app.listen(3000);