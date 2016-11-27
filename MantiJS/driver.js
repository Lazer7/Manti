var mysql = require('mysql');

var titles= "Titles";

var fs = require("fs");


var connection = mysql.createConnection({
  host     : '127.0.0.1',
  user     : 'root',
  password : '',
  database : 'manti'
});

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
});



var express = require('express');
var app = express();


app.set('view engine', 'pug');
app.set('views','./../MantiPug');

app.use(express.static('../../Manti'));


app.get('/mainpage', function(req, res){
    console.log('success');
    res.render('mainPage');
});

var a = ['subPageName','wewlad'];
app.get('/anime', function(req, res){
    
        connection.query('SELECT Thread_ID as ID, Thread_title as TITLE, Category_Name as Category, Thread_Date as Date, "thread" as KIND from Threads WHERE Category_Name = "anime" UNION SELECT Post_ID, Post_title, Category_Name, Post_date, "post" from posts WHERE Category_Name = "anime"', function(err, rows,fields) {
            if (err){throw err;}
            var length = rows.length;
            
                    console.log('success')
                    res.render('subPage', {subPageName: 'anime',
                                           title1: rows[length-1].TITLE,
                                           date1: rows[length-1].Date,
                                           data1:rows[length-1].ID,
                                           type1: rows[length-1].KIND ,
                                           title2: rows[length-2].TITLE,
                                           date2: rows[length-2].Date,
                                           data2:rows[length-2].ID,
                                           type2: rows[length-2].KIND ,
                                           title3: rows[length-3].TITLE,
                                           date3: rows[length-3].Date,
                                           data3:rows[length-3].ID,
                                           type3: rows[length-3].KIND ,
                                           title4: rows[length-4].TITLE,
                                           date4: rows[length-4].Date,
                                           data4:rows[length-4].ID,
                                           type4: rows[length-4].KIND ,
                                           title5: rows[length-5].TITLE,
                                           date5: rows[length-5].Date,
                                           data5:rows[length-5].ID,
                                           type5: rows[length-5].KIND ,
                                           title6: rows[length-6].TITLE,
                                           date6: rows[length-6].Date,
                                           data6:rows[length-6].ID,
                                           type6: rows[length-6].KIND ,
                                           title7: rows[length-7].TITLE,
                                           date7: rows[length-7].Date,
                                           data7:rows[length-7].ID,
                                           type7: rows[length-7].KIND ,
                                           title8: rows[length-8].TITLE,
                                           date8: rows[length-8].Date,
                                           data8:rows[length-8].ID,
                                           type8: rows[length-8].KIND ,
                                           title9: rows[length-9].TITLE,
                                           date9: rows[length-9].Date,
                                           data9:rows[length-9].ID,
                                           type9: rows[length-9].KIND ,
                                           title10: rows[length-10].TITLE,
                                           date10: rows[length-10].Date,
                                           data10:rows[length-10].ID,
                                           type10: rows[length-10].KIND 
                                                                });
            
            });
    
     
        
    

        });

app.get('/coding', function(req, res){
        
        connection.query('SELECT Thread_ID as ID, Thread_title as TITLE, Category_Name as Category, Thread_Date as Date, "thread" as KIND from Threads WHERE Category_Name = "coding" UNION SELECT Post_ID, Post_title, Category_Name, Post_date, "post" from posts WHERE Category_Name = "coding" ', function(err, rows,fields) {
            if (err){throw err;}
            var length = rows.length;
            
                    console.log('success')
                    res.render('subPage', {subPageName: 'coding',
                                           title1: rows[length-1].TITLE,
                                           date1: rows[length-1].Date,
                                           data1:rows[length-1].ID,
                                           type1: rows[length-1].KIND ,
                                           title2: rows[length-2].TITLE,
                                           date2: rows[length-2].Date,
                                           data2:rows[length-2].ID,
                                           type2: rows[length-2].KIND ,
                                           title3: rows[length-3].TITLE,
                                           date3: rows[length-3].Date,
                                           data3:rows[length-3].ID,
                                           type3: rows[length-3].KIND ,
                                           title4: rows[length-4].TITLE,
                                           date4: rows[length-4].Date,
                                           data4:rows[length-4].ID,
                                           type4: rows[length-4].KIND ,
                                           title5: rows[length-5].TITLE,
                                           date5: rows[length-5].Date,
                                           data5:rows[length-5].ID,
                                           type5: rows[length-5].KIND ,
                                           title6: rows[length-6].TITLE,
                                           date6: rows[length-6].Date,
                                           data6:rows[length-6].ID,
                                           type6: rows[length-6].KIND ,
                                           title7: rows[length-7].TITLE,
                                           date7: rows[length-7].Date,
                                           data7:rows[length-7].ID,
                                           type7: rows[length-7].KIND ,
                                           title8: rows[length-8].TITLE,
                                           date8: rows[length-8].Date,
                                           data8:rows[length-8].ID,
                                           type8: rows[length-8].KIND ,
                                           title9: rows[length-9].TITLE,
                                           date9: rows[length-9].Date,
                                           data9:rows[length-9].ID,
                                           type9: rows[length-9].KIND ,
                                           title10: rows[length-10].TITLE,
                                           date10: rows[length-10].Date,
                                           data10:rows[length-10].ID,
                                           type10: rows[length-10].KIND 
                                                                });
            
            });
        });

app.get('/food', function(req, res){
        
        connection.query('SELECT Thread_ID as ID, Thread_title as TITLE, Category_Name as Category, Thread_Date as Date, "thread" as KIND from Threads WHERE Category_Name = "food" UNION SELECT Post_ID, Post_title, Category_Name, Post_date, "post" from posts WHERE Category_Name = "food"', function(err, rows,fields) {
            if (err){throw err;}
            var length = rows.length;
            
                    console.log('success')
                    res.render('subPage', {subPageName: 'food',
                                           title1: rows[length-1].TITLE,
                                           date1: rows[length-1].Date,
                                           data1:rows[length-1].ID,
                                           type1: rows[length-1].KIND ,
                                           title2: rows[length-2].TITLE,
                                           date2: rows[length-2].Date,
                                           data2:rows[length-2].ID,
                                           type2: rows[length-2].KIND ,
                                           title3: rows[length-3].TITLE,
                                           date3: rows[length-3].Date,
                                           data3:rows[length-3].ID,
                                           type3: rows[length-3].KIND ,
                                           title4: rows[length-4].TITLE,
                                           date4: rows[length-4].Date,
                                           data4:rows[length-4].ID,
                                           type4: rows[length-4].KIND ,
                                           title5: rows[length-5].TITLE,
                                           date5: rows[length-5].Date,
                                           data5:rows[length-5].ID,
                                           type5: rows[length-5].KIND ,
                                           title6: rows[length-6].TITLE,
                                           date6: rows[length-6].Date,
                                           data6:rows[length-6].ID,
                                           type6: rows[length-6].KIND ,
                                           title7: rows[length-7].TITLE,
                                           date7: rows[length-7].Date,
                                           data7:rows[length-7].ID,
                                           type7: rows[length-7].KIND ,
                                           title8: rows[length-8].TITLE,
                                           date8: rows[length-8].Date,
                                           data8:rows[length-8].ID,
                                           type8: rows[length-8].KIND ,
                                           title9: rows[length-9].TITLE,
                                           date9: rows[length-9].Date,
                                           data9:rows[length-9].ID,
                                           type9: rows[length-9].KIND ,
                                           title10: rows[length-10].TITLE,
                                           date10: rows[length-10].Date,
                                           data10:rows[length-10].ID,
                                           type10: rows[length-10].KIND 
                                                                });
            
            });
        });

app.get('/gaming', function(req, res){
        
        connection.query('SELECT Thread_ID as ID, Thread_title as TITLE, Category_Name as Category, Thread_Date as Date, "thread" as KIND from Threads WHERE Category_Name = "gaming" UNION SELECT Post_ID, Post_title, Category_Name, Post_date, "post" from posts WHERE Category_Name = "gaming"', function(err, rows,fields) {
            if (err){throw err;}
            var length = rows.length;
            
                    console.log('success')
                    res.render('subPage', {subPageName: 'gaming',
                                           title1: rows[length-1].TITLE,
                                           date1: rows[length-1].Date,
                                           data1:rows[length-1].ID,
                                           type1: rows[length-1].KIND ,
                                           title2: rows[length-2].TITLE,
                                           date2: rows[length-2].Date,
                                           data2:rows[length-2].ID,
                                           type2: rows[length-2].KIND ,
                                           title3: rows[length-3].TITLE,
                                           date3: rows[length-3].Date,
                                           data3:rows[length-3].ID,
                                           type3: rows[length-3].KIND ,
                                           title4: rows[length-4].TITLE,
                                           date4: rows[length-4].Date,
                                           data4:rows[length-4].ID,
                                           type4: rows[length-4].KIND ,
                                           title5: rows[length-5].TITLE,
                                           date5: rows[length-5].Date,
                                           data5:rows[length-5].ID,
                                           type5: rows[length-5].KIND ,
                                           title6: rows[length-6].TITLE,
                                           date6: rows[length-6].Date,
                                           data6:rows[length-6].ID,
                                           type6: rows[length-6].KIND ,
                                           title7: rows[length-7].TITLE,
                                           date7: rows[length-7].Date,
                                           data7:rows[length-7].ID,
                                           type7: rows[length-7].KIND ,
                                           title8: rows[length-8].TITLE,
                                           date8: rows[length-8].Date,
                                           data8:rows[length-8].ID,
                                           type8: rows[length-8].KIND ,
                                           title9: rows[length-9].TITLE,
                                           date9: rows[length-9].Date,
                                           data9:rows[length-9].ID,
                                           type9: rows[length-9].KIND ,
                                           title10: rows[length-10].TITLE,
                                           date10: rows[length-10].Date,
                                           data10:rows[length-10].ID,
                                           type10: rows[length-10].KIND 
                                                                });
            
            });
        });

app.get('/movies', function(req, res){
        
        connection.query('SELECT Thread_ID as ID, Thread_title as TITLE, Category_Name as Category, Thread_Date as Date, "thread" as KIND from Threads WHERE Category_Name = "movies" UNION SELECT Post_ID, Post_title, Category_Name, Post_date, "post" from posts WHERE Category_Name = "movies"', function(err, rows,fields) {
            if (err){throw err;}
            var length = rows.length;
            
                    console.log('success')
                    res.render('subPage', {subPageName: 'movies',
                                           title1: rows[length-1].TITLE,
                                           date1: rows[length-1].Date,
                                           data1:rows[length-1].ID,
                                           type1: rows[length-1].KIND ,
                                           title2: rows[length-2].TITLE,
                                           date2: rows[length-2].Date,
                                           data2:rows[length-2].ID,
                                           type2: rows[length-2].KIND ,
                                           title3: rows[length-3].TITLE,
                                           date3: rows[length-3].Date,
                                           data3:rows[length-3].ID,
                                           type3: rows[length-3].KIND ,
                                           title4: rows[length-4].TITLE,
                                           date4: rows[length-4].Date,
                                           data4:rows[length-4].ID,
                                           type4: rows[length-4].KIND ,
                                           title5: rows[length-5].TITLE,
                                           date5: rows[length-5].Date,
                                           data5:rows[length-5].ID,
                                           type5: rows[length-5].KIND ,
                                           title6: rows[length-6].TITLE,
                                           date6: rows[length-6].Date,
                                           data6:rows[length-6].ID,
                                           type6: rows[length-6].KIND ,
                                           title7: rows[length-7].TITLE,
                                           date7: rows[length-7].Date,
                                           data7:rows[length-7].ID,
                                           type7: rows[length-7].KIND ,
                                           title8: rows[length-8].TITLE,
                                           date8: rows[length-8].Date,
                                           data8:rows[length-8].ID,
                                           type8: rows[length-8].KIND ,
                                           title9: rows[length-9].TITLE,
                                           date9: rows[length-9].Date,
                                           data9:rows[length-9].ID,
                                           type9: rows[length-9].KIND ,
                                           title10: rows[length-10].TITLE,
                                           date10: rows[length-10].Date,
                                           data10:rows[length-10].ID,
                                           type10: rows[length-10].KIND 
                                                                });
            
            });
        });

app.get('/news', function(req, res){
        
        connection.query('SELECT Thread_ID as ID, Thread_title as TITLE, Category_Name as Category, Thread_Date as Date, "thread" as KIND from Threads WHERE Category_Name = "news" UNION SELECT Post_ID, Post_title, Category_Name, Post_date, "post" from posts WHERE Category_Name = "news"', function(err, rows,fields) {
            if (err){throw err;}
            var length = rows.length;
            
                    console.log('success')
                   res.render('subPage', {subPageName: 'news',
                                           title1: rows[length-1].TITLE,
                                           date1: rows[length-1].Date,
                                           data1:rows[length-1].ID,
                                           type1: rows[length-1].KIND ,
                                           title2: rows[length-2].TITLE,
                                           date2: rows[length-2].Date,
                                           data2:rows[length-2].ID,
                                           type2: rows[length-2].KIND ,
                                           title3: rows[length-3].TITLE,
                                           date3: rows[length-3].Date,
                                           data3:rows[length-3].ID,
                                           type3: rows[length-3].KIND ,
                                           title4: rows[length-4].TITLE,
                                           date4: rows[length-4].Date,
                                           data4:rows[length-4].ID,
                                           type4: rows[length-4].KIND ,
                                           title5: rows[length-5].TITLE,
                                           date5: rows[length-5].Date,
                                           data5:rows[length-5].ID,
                                           type5: rows[length-5].KIND ,
                                           title6: rows[length-6].TITLE,
                                           date6: rows[length-6].Date,
                                           data6:rows[length-6].ID,
                                           type6: rows[length-6].KIND ,
                                           title7: rows[length-7].TITLE,
                                           date7: rows[length-7].Date,
                                           data7:rows[length-7].ID,
                                           type7: rows[length-7].KIND ,
                                           title8: rows[length-8].TITLE,
                                           date8: rows[length-8].Date,
                                           data8:rows[length-8].ID,
                                           type8: rows[length-8].KIND ,
                                           title9: rows[length-9].TITLE,
                                           date9: rows[length-9].Date,
                                           data9:rows[length-9].ID,
                                           type9: rows[length-9].KIND ,
                                           title10: rows[length-10].TITLE,
                                           date10: rows[length-10].Date,
                                           data10:rows[length-10].ID,
                                           type10: rows[length-10].KIND 
                                                                });
            
            });
        });

app.get('/philosophy', function(req, res){
        
        connection.query('SELECT Thread_ID as ID, Thread_title as TITLE, Category_Name as Category, Thread_Date as Date, "thread" as KIND from Threads WHERE Category_Name = "philosophy" UNION SELECT Post_ID, Post_title, Category_Name, Post_date, "post" from posts WHERE Category_Name = "philosophy"', function(err, rows,fields) {
            if (err){throw err;}
            var length = rows.length;
            
                    console.log('success')
                    res.render('subPage', {subPageName: 'philosophy',
                                           title1: rows[length-1].TITLE,
                                           date1: rows[length-1].Date,
                                           data1:rows[length-1].ID,
                                           type1: rows[length-1].KIND ,
                                           title2: rows[length-2].TITLE,
                                           date2: rows[length-2].Date,
                                           data2:rows[length-2].ID,
                                           type2: rows[length-2].KIND ,
                                           title3: rows[length-3].TITLE,
                                           date3: rows[length-3].Date,
                                           data3:rows[length-3].ID,
                                           type3: rows[length-3].KIND ,
                                           title4: rows[length-4].TITLE,
                                           date4: rows[length-4].Date,
                                           data4:rows[length-4].ID,
                                           type4: rows[length-4].KIND ,
                                           title5: rows[length-5].TITLE,
                                           date5: rows[length-5].Date,
                                           data5:rows[length-5].ID,
                                           type5: rows[length-5].KIND ,
                                           title6: rows[length-6].TITLE,
                                           date6: rows[length-6].Date,
                                           data6:rows[length-6].ID,
                                           type6: rows[length-6].KIND ,
                                           title7: rows[length-7].TITLE,
                                           date7: rows[length-7].Date,
                                           data7:rows[length-7].ID,
                                           type7: rows[length-7].KIND ,
                                           title8: rows[length-8].TITLE,
                                           date8: rows[length-8].Date,
                                           data8:rows[length-8].ID,
                                           type8: rows[length-8].KIND ,
                                           title9: rows[length-9].TITLE,
                                           date9: rows[length-9].Date,
                                           data9:rows[length-9].ID,
                                           type9: rows[length-9].KIND ,
                                           title10: rows[length-10].TITLE,
                                           date10: rows[length-10].Date,
                                           data10:rows[length-10].ID,
                                           type10: rows[length-10].KIND 
                                                                });
            
            });
        });

app.get('/ScienceAndTechnology', function(req, res){
        
        connection.query('SELECT Thread_ID as ID, Thread_title as TITLE, Category_Name as Category, Thread_Date as Date, "thread" as KIND from Threads WHERE Category_Name = "scienceandtechnology" UNION SELECT Post_ID, Post_title, Category_Name, Post_date, "post" from posts WHERE Category_Name = "scienceandtechnology"', function(err, rows,fields) {
            if (err){throw err;}
            var length = rows.length;
            
                    console.log('success')
                    res.render('subPage', {subPageName: 'Science and Technology',
                                           title1: rows[length-1].TITLE,
                                           date1: rows[length-1].Date,
                                           data1:rows[length-1].ID,
                                           type1: rows[length-1].KIND ,
                                           title2: rows[length-2].TITLE,
                                           date2: rows[length-2].Date,
                                           data2:rows[length-2].ID,
                                           type2: rows[length-2].KIND ,
                                           title3: rows[length-3].TITLE,
                                           date3: rows[length-3].Date,
                                           data3:rows[length-3].ID,
                                           type3: rows[length-3].KIND ,
                                           title4: rows[length-4].TITLE,
                                           date4: rows[length-4].Date,
                                           data4:rows[length-4].ID,
                                           type4: rows[length-4].KIND ,
                                           title5: rows[length-5].TITLE,
                                           date5: rows[length-5].Date,
                                           data5:rows[length-5].ID,
                                           type5: rows[length-5].KIND ,
                                           title6: rows[length-6].TITLE,
                                           date6: rows[length-6].Date,
                                           data6:rows[length-6].ID,
                                           type6: rows[length-6].KIND ,
                                           title7: rows[length-7].TITLE,
                                           date7: rows[length-7].Date,
                                           data7:rows[length-7].ID,
                                           type7: rows[length-7].KIND ,
                                           title8: rows[length-8].TITLE,
                                           date8: rows[length-8].Date,
                                           data8:rows[length-8].ID,
                                           type8: rows[length-8].KIND ,
                                           title9: rows[length-9].TITLE,
                                           date9: rows[length-9].Date,
                                           data9:rows[length-9].ID,
                                           type9: rows[length-9].KIND ,
                                           title10: rows[length-10].TITLE,
                                           date10: rows[length-10].Date,
                                           data10:rows[length-10].ID,
                                           type10: rows[length-10].KIND 
                                                                });
            
            });
        });

app.get('/CodingHelp', function(req, res){
        
        connection.query('SELECT Thread_ID as ID, Thread_title as TITLE, Category_Name as Category, Thread_Date as Date, "thread" as KIND from Threads WHERE Category_Name = "codinghelp" UNION SELECT Post_ID, Post_title, Category_Name, Post_date, "post" from posts WHERE Category_Name = "codinghelp"', function(err, rows,fields) {
            if (err){throw err;}
            var length = rows.length;
            
                    console.log('success')
                    res.render('subPage', {subPageName: 'Coding Help',
                                           title1: rows[length-1].TITLE,
                                           date1: rows[length-1].Date,
                                           data1:rows[length-1].ID,
                                           type1: rows[length-1].KIND ,
                                           title2: rows[length-2].TITLE,
                                           date2: rows[length-2].Date,
                                           data2:rows[length-2].ID,
                                           type2: rows[length-2].KIND ,
                                           title3: rows[length-3].TITLE,
                                           date3: rows[length-3].Date,
                                           data3:rows[length-3].ID,
                                           type3: rows[length-3].KIND ,
                                           title4: rows[length-4].TITLE,
                                           date4: rows[length-4].Date,
                                           data4:rows[length-4].ID,
                                           type4: rows[length-4].KIND ,
                                           title5: rows[length-5].TITLE,
                                           date5: rows[length-5].Date,
                                           data5:rows[length-5].ID,
                                           type5: rows[length-5].KIND ,
                                           title6: rows[length-6].TITLE,
                                           date6: rows[length-6].Date,
                                           data6:rows[length-6].ID,
                                           type6: rows[length-6].KIND ,
                                           title7: rows[length-7].TITLE,
                                           date7: rows[length-7].Date,
                                           data7:rows[length-7].ID,
                                           type7: rows[length-7].KIND ,
                                           title8: rows[length-8].TITLE,
                                           date8: rows[length-8].Date,
                                           data8:rows[length-8].ID,
                                           type8: rows[length-8].KIND ,
                                           title9: rows[length-9].TITLE,
                                           date9: rows[length-9].Date,
                                           data9:rows[length-9].ID,
                                           type9: rows[length-9].KIND ,
                                           title10: rows[length-10].TITLE,
                                           date10: rows[length-10].Date,
                                           data10:rows[length-10].ID,
                                           type10: rows[length-10].KIND 
                                                                });
            
            });
        });

var titles= "Titles";
console.log("before read");
var fs = require('fs');  
fs.readFile('../MantiHTML/Queries.json', function read(err, data){
    if(err){throw err;}
    var config =JSON.parse(data);
    var IsThread= config.Check;
    var SQL=config.SQL;
    var ID= config.ID;
    console.log(SQL);


connection.query(SQL, function(err, rows,fields) {
  if (err){throw err;}
    else{
     setValue(rows);
    }
});
    
if(IsThread){
    connection.query(('SELECT * FROM postcomment where Thread_ID =' + ID), function(err, rice,fields) {
     if (err){throw err;}
         else{
             setComments(rice);  
         }
    });
}
else{
    connection.query(('SELECT * FROM postcomment where Posts_ID =' + ID), function(err, rice,fields) {
     if (err){throw err;}
         else{
            setComments(rice);  
         }
    });
}
function setValue(values){    
    titles=values;
    var jsonfile = require('jsonfile')
    var file = '../MantiHTML/datas.json'
    jsonfile.writeFile(file, titles, function (err) {
        console.error(err)
    });
}
function setComments(values){
    titles=values;
    var jsonfile = require('jsonfile')
    var file = '../MantiHTML/comment.json'
    jsonfile.writeFile(file, titles, function (err) {
        console.error(err)
    });
}
});




app.listen(4000);


