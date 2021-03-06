//in this section, all packages and dependencies are linked
var mysql = require('mysql');

var titles= "Titles";

var fs = require("fs");


var jsonfile = require('jsonfile')

var file = '../MantiHTML/category.json'

//a connection to mysql is established here
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

//'pug' our template generator, is instantiated here
app.set('view engine', 'pug');
app.set('views','./../MantiPug');

app.use(express.static('../../Manti'));


app.get('/mainpage', function(req, res){
    console.log('success');
    res.render('mainPage');
});

var a = ['subPageName','wewlad'];
//here we generate the anime subpage
app.get('/anime', function(req, res){
        jsonfile.writeFile(file, "anime", function (err) {
            console.error(err)
        });
        connection.query('SELECT Thread_ID as ID, Thread_title as Title, Category_Name as Category, Thread_Date as Date, true as "Check" from Threads WHERE Category_Name = "anime" UNION SELECT Post_ID, Post_title, Category_Name, Post_date, false from posts WHERE Category_Name = "anime" ORDER BY Date, Title' , function(err, rows,fields) {
            if (err){throw err;}
            var length = rows.length;
                    //we use the above query to populate the subpage with relevant data
                    console.log('success')
                    res.render('AnimePage', {subPageName: 'anime',
                                           title1: rows[length-1].Title,
                                           date1: rows[length-1].Date,
                                           data1:rows[length-1].ID,
                                           type1: rows[length-1].KIND ,
                                           title2: rows[length-2].Title,
                                           date2: rows[length-2].Date,
                                           data2:rows[length-2].ID,
                                           type2: rows[length-2].KIND ,
                                           title3: rows[length-3].Title,
                                           date3: rows[length-3].Date,
                                           data3:rows[length-3].ID,
                                           type3: rows[length-3].KIND ,
                                           title4: rows[length-4].Title,
                                           date4: rows[length-4].Date,
                                           data4:rows[length-4].ID,
                                           type4: rows[length-4].KIND ,
                                           title5: rows[length-5].Title,
                                           date5: rows[length-5].Date,
                                           data5:rows[length-5].ID,
                                           type5: rows[length-5].KIND ,
                                           title6: rows[length-6].Title,
                                           date6: rows[length-6].Date,
                                           data6:rows[length-6].ID,
                                           type6: rows[length-6].KIND ,
                                           title7: rows[length-7].Title,
                                           date7: rows[length-7].Date,
                                           data7:rows[length-7].ID,
                                           type7: rows[length-7].KIND ,
                                           title8: rows[length-8].Title,
                                           date8: rows[length-8].Date,
                                           data8:rows[length-8].ID,
                                           type8: rows[length-8].KIND ,
                                           title9: rows[length-9].Title,
                                           date9: rows[length-9].Date,
                                           data9:rows[length-9].ID,
                                           type9: rows[length-9].KIND ,
                                           title10: rows[length-10].Title,
                                           date10: rows[length-10].Date,
                                           data10:rows[length-10].ID,
                                           type10: rows[length-10].KIND 
                                                                });
            
            
                        //we also write to the JSON file using info retrieved from the query
                        var file = '../MantiHTML/AnimePosts/AnimeTitle1.json';
                        jsonfile.writeFile(file, rows[length-1], function (err) {
                        console.error(err)});
                        var file = '../MantiHTML/AnimePosts/AnimeTitle2.json';
                        jsonfile.writeFile(file, rows[length-2], function (err) {
                        console.error(err)});
                        var file = '../MantiHTML/AnimePosts/AnimeTitle3.json';
                        jsonfile.writeFile(file, rows[length-3], function (err) {
                        console.error(err)});
                        var file = '../MantiHTML/AnimePosts/AnimeTitle4.json';
                        jsonfile.writeFile(file, rows[length-4], function (err) {
                        console.error(err)});
                        var file = '../MantiHTML/AnimePosts/AnimeTitle5.json';
                        jsonfile.writeFile(file, rows[length-5], function (err) {
                        console.error(err)});
                        var file = '../MantiHTML/AnimePosts/AnimeTitle6.json';
                        jsonfile.writeFile(file, rows[length-6], function (err) {
                        console.error(err)});
                        var file = '../MantiHTML/AnimePosts/AnimeTitle7.json';
                        jsonfile.writeFile(file, rows[length-7], function (err) {
                        console.error(err)});
                        var file = '../MantiHTML/AnimePosts/AnimeTitle8.json';
                        jsonfile.writeFile(file, rows[length-8], function (err) {
                        console.error(err)});
                        var file = '../MantiHTML/AnimePosts/AnimeTitle9.json';
                        jsonfile.writeFile(file, rows[length-9], function (err) {
                        console.error(err)});
                        var file = '../MantiHTML/AnimePosts/AnimeTitle10.json';
                        jsonfile.writeFile(file, rows[length-10], function (err) {
                        console.error(err)});               
            
            
            
            });
    
      connection.query('SELECT Thread_title as TITLE, Category_Name as Category, Thread_Date as Date, Thread_message as Message, "" as URL from Threads WHERE Category_Name = "anime" UNION SELECT Post_title, Category_Name, Post_date, Posts_message , Post_URL from Posts WHERE Category_Name = "anime" ORDER BY Date, TITLE' , function(err, rows,fields) {
            if (err){throw err;}
          
            //another query is run to input another set of info into another set of JSON files
            var length = rows.length;
                        var x=JSON.stringify(rows[length-1]);
                        var x=JSON.parse("["+x+"]");
                        var file = '../MantiHTML/AnimePosts/AnimeData1.json';
                        jsonfile.writeFile(file, x, function (err) {
                        console.error(err)});
                        x="["+JSON.stringify(rows[length-2])+"]";
                        x=JSON.parse(x);
                        var file = '../MantiHTML/AnimePosts/AnimeData2.json';
                        jsonfile.writeFile(file, x, function (err) {
                        console.error(err)});
                        x="["+JSON.stringify(rows[length-3])+"]";
                        x=JSON.parse(x);
                        var file = '../MantiHTML/AnimePosts/AnimeData3.json';
                        jsonfile.writeFile(file, x, function (err) {
                        console.error(err)});
                        x="["+JSON.stringify(rows[length-4])+"]";
                        x=JSON.parse(x);
                        var file = '../MantiHTML/AnimePosts/AnimeData4.json';
                        jsonfile.writeFile(file,x, function (err) {
                        console.error(err)});
                        x="["+JSON.stringify(rows[length-5])+"]";
                        x=JSON.parse(x);
                        var file = '../MantiHTML/AnimePosts/AnimeData5.json';
                        jsonfile.writeFile(file, x, function (err) {
                        console.error(err)});
                        x="["+JSON.stringify(rows[length-6])+"]";
                        x=JSON.parse(x);
                        var file = '../MantiHTML/AnimePosts/AnimeData6.json';
                        jsonfile.writeFile(file, x, function (err) {
                        console.error(err)});
                        x="["+JSON.stringify(rows[length-7])+"]";
                        x=JSON.parse(x);
                        var file = '../MantiHTML/AnimePosts/AnimeData7.json';
                        jsonfile.writeFile(file, x, function (err) {
                        console.error(err)});
                        x="["+JSON.stringify(rows[length-8])+"]";
                        x=JSON.parse(x);
                        var file = '../MantiHTML/AnimePosts/AnimeData8.json';
                        jsonfile.writeFile(file, x, function (err) {
                        console.error(err)});
                        x="["+JSON.stringify(rows[length-9])+"]";
                        x=JSON.parse(x);
                        var file = '../MantiHTML/AnimePosts/AnimeData9.json';
                        jsonfile.writeFile(file, x, function (err) {
                        console.error(err)});
                        x="["+JSON.stringify(rows[length-10])+"]";
                        x=JSON.parse(x);
                        var file = '../MantiHTML/AnimePosts/AnimeData10.json';
                        jsonfile.writeFile(file,x, function (err) {
                        console.error(err)});  
                
            });
        
    

        });


//same process as above is repeated 8 more times for the subpages below
app.get('/coding', function(req, res){
        jsonfile.writeFile(file, "coding", function (err) {
            console.error(err)
        });
        connection.query('SELECT Thread_ID as ID, Thread_title as Title, Category_Name as Category, Thread_Date as Date, true as "Check" from Threads WHERE Category_Name = "anime" UNION SELECT Post_ID, Post_title, Category_Name, Post_date, false from posts WHERE Category_Name = "coding" ORDER BY Date, Title' , function(err, rows,fields) {
            if (err){throw err;}
            var length = rows.length;
            
                    console.log('success')
                    res.render('CodingPage', {subPageName: 'coding',
                                           title1: rows[length-1].Title,
                                           date1: rows[length-1].Date,
                                           data1:rows[length-1].ID,
                                           type1: rows[length-1].KIND ,
                                           title2: rows[length-2].Title,
                                           date2: rows[length-2].Date,
                                           data2:rows[length-2].ID,
                                           type2: rows[length-2].KIND ,
                                           title3: rows[length-3].Title,
                                           date3: rows[length-3].Date,
                                           data3:rows[length-3].ID,
                                           type3: rows[length-3].KIND ,
                                           title4: rows[length-4].Title,
                                           date4: rows[length-4].Date,
                                           data4:rows[length-4].ID,
                                           type4: rows[length-4].KIND ,
                                           title5: rows[length-5].Title,
                                           date5: rows[length-5].Date,
                                           data5:rows[length-5].ID,
                                           type5: rows[length-5].KIND ,
                                           title6: rows[length-6].Title,
                                           date6: rows[length-6].Date,
                                           data6:rows[length-6].ID,
                                           type6: rows[length-6].KIND ,
                                           title7: rows[length-7].Title,
                                           date7: rows[length-7].Date,
                                           data7:rows[length-7].ID,
                                           type7: rows[length-7].KIND ,
                                           title8: rows[length-8].Title,
                                           date8: rows[length-8].Date,
                                           data8:rows[length-8].ID,
                                           type8: rows[length-8].KIND ,
                                           title9: rows[length-9].Title,
                                           date9: rows[length-9].Date,
                                           data9:rows[length-9].ID,
                                           type9: rows[length-9].KIND ,
                                           title10: rows[length-10].Title,
                                           date10: rows[length-10].Date,
                                           data10:rows[length-10].ID,
                                           type10: rows[length-10].KIND 
                                                                });
            
            
            
                        var file = '../MantiHTML/CodingPosts/CodingTitle1.json';
                        jsonfile.writeFile(file, rows[length-1], function (err) {
                        console.error(err)});
                        var file = '../MantiHTML/CodingPosts/CodingTitle2.json';
                        jsonfile.writeFile(file, rows[length-2], function (err) {
                        console.error(err)});
                        var file = '../MantiHTML/CodingPosts/CodingTitle3.json';
                        jsonfile.writeFile(file, rows[length-3], function (err) {
                        console.error(err)});
                        var file = '../MantiHTML/CodingPosts/CodingTitle4.json';
                        jsonfile.writeFile(file, rows[length-4], function (err) {
                        console.error(err)});
                        var file = '../MantiHTML/CodingPosts/CodingTitle5.json';
                        jsonfile.writeFile(file, rows[length-5], function (err) {
                        console.error(err)});
                        var file = '../MantiHTML/CodingPosts/CodingTitle6.json';
                        jsonfile.writeFile(file, rows[length-6], function (err) {
                        console.error(err)});
                        var file = '../MantiHTML/CodingPosts/CodingTitle7.json';
                        jsonfile.writeFile(file, rows[length-7], function (err) {
                        console.error(err)});
                        var file = '../MantiHTML/CodingPosts/CodingTitle8.json';
                        jsonfile.writeFile(file, rows[length-8], function (err) {
                        console.error(err)});
                        var file = '../MantiHTML/CodingPosts/CodingTitle9.json';
                        jsonfile.writeFile(file, rows[length-9], function (err) {
                        console.error(err)});
                        var file = '../MantiHTML/CodingPosts/CodingTitle10.json';
                        jsonfile.writeFile(file, rows[length-10], function (err) {
                        console.error(err)});               
            
            
            
            });
    
                        connection.query('SELECT Thread_title as TITLE, Category_Name as Category, Thread_Date as Date, Thread_message as Message, "" as URL from Threads WHERE Category_Name = "coding" UNION SELECT Post_title, Category_Name, Post_date, Posts_message , Post_URL from Posts WHERE Category_Name = "coding" ORDER BY Date,TITLE' , function(err, rows,fields) {
            if (err){throw err;}
            var length = rows.length;
            
            var x=JSON.stringify(rows[length-1]);
            var x=JSON.parse("["+x+"]");
                        var file = '../MantiHTML/CodingPosts/CodingData1.json';
                        jsonfile.writeFile(file, x, function (err) {
                        console.error(err)});
          
            x="["+JSON.stringify(rows[length-2])+"]";
            x=JSON.parse(x);
                        var file = '../MantiHTML/CodingPosts/CodingData2.json';
                        jsonfile.writeFile(file, x, function (err) {
                        console.error(err)});
          x="["+JSON.stringify(rows[length-3])+"]";
            x=JSON.parse(x);
                        var file = '../MantiHTML/CodingPosts/CodingData3.json';
                        jsonfile.writeFile(file, x, function (err) {
                        console.error(err)});
          x="["+JSON.stringify(rows[length-4])+"]";
            x=JSON.parse(x);
                        var file = '../MantiHTML/CodingPosts/CodingData4.json';
                        jsonfile.writeFile(file,x, function (err) {
                        console.error(err)});
          x="["+JSON.stringify(rows[length-5])+"]";
            x=JSON.parse(x);
                        var file = '../MantiHTML/CodingPosts/CodingData5.json';
                        jsonfile.writeFile(file, x, function (err) {
                        console.error(err)});
          x="["+JSON.stringify(rows[length-6])+"]";
            x=JSON.parse(x);
                        var file = '../MantiHTML/CodingPosts/CodingData6.json';
                        jsonfile.writeFile(file, x, function (err) {
                        console.error(err)});
          x="["+JSON.stringify(rows[length-7])+"]";
            x=JSON.parse(x);
                        var file = '../MantiHTML/CodingPosts/CodingData7.json';
                        jsonfile.writeFile(file, x, function (err) {
                        console.error(err)});
          x="["+JSON.stringify(rows[length-8])+"]";
            x=JSON.parse(x);
                        var file = '../MantiHTML/CodingPosts/CodingData8.json';
                        jsonfile.writeFile(file, x, function (err) {
                        console.error(err)});
          x="["+JSON.stringify(rows[length-9])+"]";
            x=JSON.parse(x);
                        var file = '../MantiHTML/CodingPosts/CodingData9.json';
                        jsonfile.writeFile(file, x, function (err) {
                        console.error(err)});
          x="["+JSON.stringify(rows[length-10])+"]";
            x=JSON.parse(x);
                        var file = '../MantiHTML/CodingPosts/CodingData10.json';
                        jsonfile.writeFile(file,x, function (err) {
                        console.error(err)});  
                
            });
    
    
        });

app.get('/food', function(req, res){
        jsonfile.writeFile(file, "food", function (err) {
            console.error(err)
        });
                connection.query('SELECT Thread_ID as ID, Thread_title as Title, Category_Name as Category, Thread_Date as Date, true as "Check" from Threads WHERE Category_Name = "food" UNION SELECT Post_ID, Post_title, Category_Name, Post_date, false from posts WHERE Category_Name = "food" ORDER BY Date,Title' , function(err, rows,fields) {
            if (err){throw err;}
            var length = rows.length;
            
                    console.log('success')
                    res.render('FoodPage', {subPageName: 'food',
                                           title1: rows[length-1].Title,
                                           date1: rows[length-1].Date,
                                           data1:rows[length-1].ID,
                                           type1: rows[length-1].KIND ,
                                           title2: rows[length-2].Title,
                                           date2: rows[length-2].Date,
                                           data2:rows[length-2].ID,
                                           type2: rows[length-2].KIND ,
                                           title3: rows[length-3].Title,
                                           date3: rows[length-3].Date,
                                           data3:rows[length-3].ID,
                                           type3: rows[length-3].KIND ,
                                           title4: rows[length-4].Title,
                                           date4: rows[length-4].Date,
                                           data4:rows[length-4].ID,
                                           type4: rows[length-4].KIND ,
                                           title5: rows[length-5].Title,
                                           date5: rows[length-5].Date,
                                           data5:rows[length-5].ID,
                                           type5: rows[length-5].KIND ,
                                           title6: rows[length-6].Title,
                                           date6: rows[length-6].Date,
                                           data6:rows[length-6].ID,
                                           type6: rows[length-6].KIND ,
                                           title7: rows[length-7].Title,
                                           date7: rows[length-7].Date,
                                           data7:rows[length-7].ID,
                                           type7: rows[length-7].KIND ,
                                           title8: rows[length-8].Title,
                                           date8: rows[length-8].Date,
                                           data8:rows[length-8].ID,
                                           type8: rows[length-8].KIND ,
                                           title9: rows[length-9].Title,
                                           date9: rows[length-9].Date,
                                           data9:rows[length-9].ID,
                                           type9: rows[length-9].KIND ,
                                           title10: rows[length-10].Title,
                                           date10: rows[length-10].Date,
                                           data10:rows[length-10].ID,
                                           type10: rows[length-10].KIND 
                                                                });
            
            
            
                        var file = '../MantiHTML/FoodPosts/FoodTitle1.json';
                        jsonfile.writeFile(file, rows[length-1], function (err) {
                        console.error(err)});
                        var file = '../MantiHTML/FoodPosts/FoodTitle2.json';
                        jsonfile.writeFile(file, rows[length-2], function (err) {
                        console.error(err)});
                        var file = '../MantiHTML/FoodPosts/FoodTitle3.json';
                        jsonfile.writeFile(file, rows[length-3], function (err) {
                        console.error(err)});
                        var file = '../MantiHTML/FoodPosts/FoodTitle4.json';
                        jsonfile.writeFile(file, rows[length-4], function (err) {
                        console.error(err)});
                        var file = '../MantiHTML/FoodPosts/FoodTitle5.json';
                        jsonfile.writeFile(file, rows[length-5], function (err) {
                        console.error(err)});
                        var file = '../MantiHTML/FoodPosts/FoodTitle6.json';
                        jsonfile.writeFile(file, rows[length-6], function (err) {
                        console.error(err)});
                        var file = '../MantiHTML/FoodPosts/FoodTitle7.json';
                        jsonfile.writeFile(file, rows[length-7], function (err) {
                        console.error(err)});
                        var file = '../MantiHTML/FoodPosts/FoodTitle8.json';
                        jsonfile.writeFile(file, rows[length-8], function (err) {
                        console.error(err)});
                        var file = '../MantiHTML/FoodPosts/FoodTitle9.json';
                        jsonfile.writeFile(file, rows[length-9], function (err) {
                        console.error(err)});
                        var file = '../MantiHTML/FoodPosts/FoodTitle10.json';
                        jsonfile.writeFile(file, rows[length-10], function (err) {
                        console.error(err)});               
            
            
            
            });
    
                        connection.query('SELECT Thread_title as TITLE, Category_Name as Category, Thread_Date as Date, Thread_message as Message, "" as URL from Threads WHERE Category_Name = "food" UNION SELECT Post_title, Category_Name, Post_date, Posts_message , Post_URL from Posts WHERE Category_Name = "food" ORDER BY Date,TITLE' , function(err, rows,fields) {
            if (err){throw err;}
            var length = rows.length;
            
                        var x=JSON.stringify(rows[length-1]);
                        var x=JSON.parse("["+x+"]");
                        var file = '../MantiHTML/FoodPosts/FoodData1.json';
                        jsonfile.writeFile(file, x, function (err) {
                        console.error(err)});
                        x="["+JSON.stringify(rows[length-2])+"]";
                        x=JSON.parse(x);
                        var file = '../MantiHTML/FoodPosts/FoodData2.json';
                        jsonfile.writeFile(file, x, function (err) {
                        console.error(err)});
                        x="["+JSON.stringify(rows[length-3])+"]";
                        x=JSON.parse(x);
                        var file = '../MantiHTML/FoodPosts/FoodData3.json';
                        jsonfile.writeFile(file, x, function (err) {
                        console.error(err)});
                        x="["+JSON.stringify(rows[length-4])+"]";
                        x=JSON.parse(x);
                        var file = '../MantiHTML/FoodPosts/FoodData4.json';
                        jsonfile.writeFile(file,x, function (err) {
                        console.error(err)});
                        x="["+JSON.stringify(rows[length-5])+"]";
                        x=JSON.parse(x);
                        var file = '../MantiHTML/FoodPosts/FoodData5.json';
                        jsonfile.writeFile(file, x, function (err) {
                        console.error(err)});
                        x="["+JSON.stringify(rows[length-6])+"]";
                        x=JSON.parse(x);
                        var file = '../MantiHTML/FoodPosts/FoodData6.json';
                        jsonfile.writeFile(file, x, function (err) {
                        console.error(err)});
                        x="["+JSON.stringify(rows[length-7])+"]";
                        x=JSON.parse(x);
                        var file = '../MantiHTML/FoodPosts/FoodData7.json';
                        jsonfile.writeFile(file, x, function (err) {
                        console.error(err)});
                        x="["+JSON.stringify(rows[length-8])+"]";
                        x=JSON.parse(x);
                        var file = '../MantiHTML/FoodPosts/FoodData8.json';
                        jsonfile.writeFile(file, x, function (err) {
                        console.error(err)});
                        x="["+JSON.stringify(rows[length-9])+"]";
                        x=JSON.parse(x);
                        var file = '../MantiHTML/FoodPosts/FoodData9.json';
                        jsonfile.writeFile(file, x, function (err) {
                        console.error(err)});
                        x="["+JSON.stringify(rows[length-10])+"]";
                        x=JSON.parse(x);
                        var file = '../MantiHTML/FoodPosts/FoodData10.json';
                        jsonfile.writeFile(file,x ,function (err) {
                        console.error(err)});  
                
            });
        });

app.get('/gaming', function(req, res){
        jsonfile.writeFile(file, "gaming", function (err) {
            console.error(err)
        });
                connection.query('SELECT Thread_ID as ID, Thread_title as Title, Category_Name as Category, Thread_Date as Date, true as "Check" from Threads WHERE Category_Name = "gaming" UNION SELECT Post_ID, Post_title, Category_Name, Post_date, false from posts WHERE Category_Name = "gaming" ORDER BY Date,Title' , function(err, rows,fields) {
            if (err){throw err;}
            var length = rows.length;
            
                    console.log('success')
                    res.render('GamingPage', {subPageName: 'gaming',
                                           title1: rows[length-1].Title,
                                           date1: rows[length-1].Date,
                                           data1:rows[length-1].ID,
                                           type1: rows[length-1].KIND ,
                                           title2: rows[length-2].Title,
                                           date2: rows[length-2].Date,
                                           data2:rows[length-2].ID,
                                           type2: rows[length-2].KIND ,
                                           title3: rows[length-3].Title,
                                           date3: rows[length-3].Date,
                                           data3:rows[length-3].ID,
                                           type3: rows[length-3].KIND ,
                                           title4: rows[length-4].Title,
                                           date4: rows[length-4].Date,
                                           data4:rows[length-4].ID,
                                           type4: rows[length-4].KIND ,
                                           title5: rows[length-5].Title,
                                           date5: rows[length-5].Date,
                                           data5:rows[length-5].ID,
                                           type5: rows[length-5].KIND ,
                                           title6: rows[length-6].Title,
                                           date6: rows[length-6].Date,
                                           data6:rows[length-6].ID,
                                           type6: rows[length-6].KIND ,
                                           title7: rows[length-7].Title,
                                           date7: rows[length-7].Date,
                                           data7:rows[length-7].ID,
                                           type7: rows[length-7].KIND ,
                                           title8: rows[length-8].Title,
                                           date8: rows[length-8].Date,
                                           data8:rows[length-8].ID,
                                           type8: rows[length-8].KIND ,
                                           title9: rows[length-9].Title,
                                           date9: rows[length-9].Date,
                                           data9:rows[length-9].ID,
                                           type9: rows[length-9].KIND ,
                                           title10: rows[length-10].Title,
                                           date10: rows[length-10].Date,
                                           data10:rows[length-10].ID,
                                           type10: rows[length-10].KIND 
                                                                });
            
            
            
                        var file = '../MantiHTML/GamingPosts/GamingTitle1.json';
                        jsonfile.writeFile(file, rows[length-1], function (err) {
                        console.error(err)});
                        var file = '../MantiHTML/GamingPosts/GamingTitle2.json';
                        jsonfile.writeFile(file, rows[length-2], function (err) {
                        console.error(err)});
                        var file = '../MantiHTML/GamingPosts/GamingTitle3.json';
                        jsonfile.writeFile(file, rows[length-3], function (err) {
                        console.error(err)});
                        var file = '../MantiHTML/GamingPosts/GamingTitle4.json';
                        jsonfile.writeFile(file, rows[length-4], function (err) {
                        console.error(err)});
                        var file = '../MantiHTML/GamingPosts/GamingTitle5.json';
                        jsonfile.writeFile(file, rows[length-5], function (err) {
                        console.error(err)});
                        var file = '../MantiHTML/GamingPosts/GamingTitle6.json';
                        jsonfile.writeFile(file, rows[length-6], function (err) {
                        console.error(err)});
                        var file = '../MantiHTML/GamingPosts/GamingTitle7.json';
                        jsonfile.writeFile(file, rows[length-7], function (err) {
                        console.error(err)});
                        var file = '../MantiHTML/GamingPosts/GamingTitle8.json';
                        jsonfile.writeFile(file, rows[length-8], function (err) {
                        console.error(err)});
                        var file = '../MantiHTML/GamingPosts/GamingTitle9.json';
                        jsonfile.writeFile(file, rows[length-9], function (err) {
                        console.error(err)});
                        var file = '../MantiHTML/GamingPosts/GamingTitle10.json';
                        jsonfile.writeFile(file, rows[length-10], function (err) {
                        console.error(err)});               
            
            
            
            });
    
                        connection.query('SELECT Thread_title as TITLE, Category_Name as Category, Thread_Date as Date, Thread_message as Message, "" as URL from Threads WHERE Category_Name = "gaming" UNION SELECT Post_title, Category_Name, Post_date, Posts_message , Post_URL from Posts WHERE Category_Name = "gaming" ORDER BY Date,TITLE' , function(err, rows,fields) {
            if (err){throw err;}
            var length = rows.length;
            
         var x=JSON.stringify(rows[length-1]);
                        var x=JSON.parse("["+x+"]");
                        var file = '../MantiHTML/GamingPosts/GamingData1.json';
                        jsonfile.writeFile(file, x, function (err) {
                        console.error(err)});
                        x="["+JSON.stringify(rows[length-2])+"]";
                        x=JSON.parse(x);
                        var file = '../MantiHTML/GamingPosts/GamingData2.json';
                        jsonfile.writeFile(file, x, function (err) {
                        console.error(err)});
                        x="["+JSON.stringify(rows[length-3])+"]";
                        x=JSON.parse(x);
                        var file = '../MantiHTML/GamingPosts/GamingData3.json';
                        jsonfile.writeFile(file, x, function (err) {
                        console.error(err)});
                        x="["+JSON.stringify(rows[length-4])+"]";
                        x=JSON.parse(x);
                        var file = '../MantiHTML/GamingPosts/GamingData4.json';
                        jsonfile.writeFile(file,x, function (err) {
                        console.error(err)});
                        x="["+JSON.stringify(rows[length-5])+"]";
                        x=JSON.parse(x);
                        var file = '../MantiHTML/GamingPosts/GamingData5.json';
                        jsonfile.writeFile(file, x, function (err) {
                        console.error(err)});
                        x="["+JSON.stringify(rows[length-6])+"]";
                        x=JSON.parse(x);
                        var file = '../MantiHTML/GamingPosts/GamingData6.json';
                        jsonfile.writeFile(file, x, function (err) {
                        console.error(err)});
                        x="["+JSON.stringify(rows[length-7])+"]";
                        x=JSON.parse(x);
                        var file = '../MantiHTML/GamingPosts/GamingData7.json';
                        jsonfile.writeFile(file, x, function (err) {
                        console.error(err)});
                        x="["+JSON.stringify(rows[length-8])+"]";
                        x=JSON.parse(x);
                        var file = '../MantiHTML/GamingPosts/GamingData8.json';
                        jsonfile.writeFile(file, x, function (err) {
                        console.error(err)});
                        x="["+JSON.stringify(rows[length-9])+"]";
                        x=JSON.parse(x);
                        var file = '../MantiHTML/GamingPosts/GamingData9.json';
                        jsonfile.writeFile(file, x, function (err) {
                        console.error(err)});
                        x="["+JSON.stringify(rows[length-10])+"]";
                        x=JSON.parse(x);
                        var file = '../MantiHTML/GamingPosts/GamingData10.json';
                        jsonfile.writeFile(file,x, function (err) {
                        console.error(err)});  
                
            });            
    
    
        });

app.get('/movies', function(req, res){
        jsonfile.writeFile(file, "movies", function (err) {
            console.error(err)
        });
                connection.query('SELECT Thread_ID as ID, Thread_title as Title, Category_Name as Category, Thread_Date as Date, true as "Check" from Threads WHERE Category_Name = "movies" UNION SELECT Post_ID, Post_title, Category_Name, Post_date, false from posts WHERE Category_Name = "movies" ORDER BY Date,Title' , function(err, rows,fields) {
            if (err){throw err;}
            var length = rows.length;
            
                    console.log('success')
                    res.render('MoviesPage', {subPageName: 'movies',
                                           title1: rows[length-1].Title,
                                           date1: rows[length-1].Date,
                                           data1:rows[length-1].ID,
                                           type1: rows[length-1].KIND ,
                                           title2: rows[length-2].Title,
                                           date2: rows[length-2].Date,
                                           data2:rows[length-2].ID,
                                           type2: rows[length-2].KIND ,
                                           title3: rows[length-3].Title,
                                           date3: rows[length-3].Date,
                                           data3:rows[length-3].ID,
                                           type3: rows[length-3].KIND ,
                                           title4: rows[length-4].Title,
                                           date4: rows[length-4].Date,
                                           data4:rows[length-4].ID,
                                           type4: rows[length-4].KIND ,
                                           title5: rows[length-5].Title,
                                           date5: rows[length-5].Date,
                                           data5:rows[length-5].ID,
                                           type5: rows[length-5].KIND ,
                                           title6: rows[length-6].Title,
                                           date6: rows[length-6].Date,
                                           data6:rows[length-6].ID,
                                           type6: rows[length-6].KIND ,
                                           title7: rows[length-7].Title,
                                           date7: rows[length-7].Date,
                                           data7:rows[length-7].ID,
                                           type7: rows[length-7].KIND ,
                                           title8: rows[length-8].Title,
                                           date8: rows[length-8].Date,
                                           data8:rows[length-8].ID,
                                           type8: rows[length-8].KIND ,
                                           title9: rows[length-9].Title,
                                           date9: rows[length-9].Date,
                                           data9:rows[length-9].ID,
                                           type9: rows[length-9].KIND ,
                                           title10: rows[length-10].Title,
                                           date10: rows[length-10].Date,
                                           data10:rows[length-10].ID,
                                           type10: rows[length-10].KIND 
                                                                });
            
            
            
                        var file = '../MantiHTML/MoviesPosts/MoviesTitle1.json';
                        jsonfile.writeFile(file, rows[length-1], function (err) {
                        console.error(err)});
                        var file = '../MantiHTML/MoviesPosts/MoviesTitle2.json';
                        jsonfile.writeFile(file, rows[length-2], function (err) {
                        console.error(err)});
                        var file = '../MantiHTML/MoviesPosts/MoviesTitle3.json';
                        jsonfile.writeFile(file, rows[length-3], function (err) {
                        console.error(err)});
                        var file = '../MantiHTML/MoviesPosts/MoviesTitle4.json';
                        jsonfile.writeFile(file, rows[length-4], function (err) {
                        console.error(err)});
                        var file = '../MantiHTML/MoviesPosts/MoviesTitle5.json';
                        jsonfile.writeFile(file, rows[length-5], function (err) {
                        console.error(err)});
                        var file = '../MantiHTML/MoviesPosts/MoviesTitle6.json';
                        jsonfile.writeFile(file, rows[length-6], function (err) {
                        console.error(err)});
                        var file = '../MantiHTML/MoviesPosts/MoviesTitle7.json';
                        jsonfile.writeFile(file, rows[length-7], function (err) {
                        console.error(err)});
                        var file = '../MantiHTML/MoviesPosts/MoviesTitle8.json';
                        jsonfile.writeFile(file, rows[length-8], function (err) {
                        console.error(err)});
                        var file = '../MantiHTML/MoviesPosts/MoviesTitle9.json';
                        jsonfile.writeFile(file, rows[length-9], function (err) {
                        console.error(err)});
                        var file = '../MantiHTML/MoviesPosts/MoviesTitle10.json';
                        jsonfile.writeFile(file, rows[length-10], function (err) {
                        console.error(err)});               
            
            
            
            });
    
                        connection.query('SELECT Thread_title as TITLE, Category_Name as Category, Thread_Date as Date, Thread_message as Message, "" as URL from Threads WHERE Category_Name = "movies" UNION SELECT Post_title, Category_Name, Post_date, Posts_message , Post_URL from Posts WHERE Category_Name = "movies" ORDER BY Date,TITLE' , function(err, rows,fields) {
            if (err){throw err;}
            var length = rows.length;
            
                        var x=JSON.stringify(rows[length-1]);
                        var x=JSON.parse("["+x+"]");
                        var file = '../MantiHTML/MoviesPosts/MoviesData1.json';
                        jsonfile.writeFile(file, x, function (err) {
                        console.error(err)});
                        x="["+JSON.stringify(rows[length-2])+"]";
                        x=JSON.parse(x);
                        var file = '../MantiHTML/MoviesPosts/MoviesData2.json';
                        jsonfile.writeFile(file, x, function (err) {
                        console.error(err)});
                        x="["+JSON.stringify(rows[length-3])+"]";
                        x=JSON.parse(x);
                        var file = '../MantiHTML/MoviesPosts/MoviesData3.json';
                        jsonfile.writeFile(file, x, function (err) {
                        console.error(err)});
                        x="["+JSON.stringify(rows[length-4])+"]";
                        x=JSON.parse(x);
                        var file = '../MantiHTML/MoviesPosts/MoviesData4.json';
                        jsonfile.writeFile(file,x, function (err) {
                        console.error(err)});
                        x="["+JSON.stringify(rows[length-5])+"]";
                        x=JSON.parse(x);
                        var file = '../MantiHTML/MoviesPosts/MoviesData5.json';
                        jsonfile.writeFile(file, x, function (err) {
                        console.error(err)});
                        x="["+JSON.stringify(rows[length-6])+"]";
                        x=JSON.parse(x);
                        var file = '../MantiHTML/MoviesPosts/MoviesData6.json';
                        jsonfile.writeFile(file, x, function (err) {
                        console.error(err)});
                        x="["+JSON.stringify(rows[length-7])+"]";
                        x=JSON.parse(x);
                        var file = '../MantiHTML/MoviesPosts/MoviesData7.json';
                        jsonfile.writeFile(file, x, function (err) {
                        console.error(err)});
                        x="["+JSON.stringify(rows[length-8])+"]";
                        x=JSON.parse(x);
                        var file = '../MantiHTML/MoviesPosts/MoviesData8.json';
                        jsonfile.writeFile(file, x, function (err) {
                        console.error(err)});
                        x="["+JSON.stringify(rows[length-9])+"]";
                        x=JSON.parse(x);
                        var file = '../MantiHTML/MoviesPosts/MoviesData9.json';
                        jsonfile.writeFile(file, x, function (err) {
                        console.error(err)});
                        x="["+JSON.stringify(rows[length-10])+"]";
                        x=JSON.parse(x);
                        var file = '../MantiHTML/MoviesPosts/MoviesData10.json';
                        jsonfile.writeFile(file,x ,function (err) {
                        console.error(err)});  
                
            });
        });

app.get('/news', function(req, res){
        jsonfile.writeFile(file, "news", function (err) {
            console.error(err)
        });
                connection.query('SELECT Thread_ID as ID, Thread_title as Title, Category_Name as Category, Thread_Date as Date, true as "Check" from Threads WHERE Category_Name = "news" UNION SELECT Post_ID, Post_title, Category_Name, Post_date, false from posts WHERE Category_Name = "news" ORDER BY Date,Title' , function(err, rows,fields) {
            if (err){throw err;}
            var length = rows.length;
            
                    console.log('success')
                    res.render('NewsPage', {subPageName: 'news',
                                           title1: rows[length-1].Title,
                                           date1: rows[length-1].Date,
                                           data1:rows[length-1].ID,
                                           type1: rows[length-1].KIND ,
                                           title2: rows[length-2].Title,
                                           date2: rows[length-2].Date,
                                           data2:rows[length-2].ID,
                                           type2: rows[length-2].KIND ,
                                           title3: rows[length-3].Title,
                                           date3: rows[length-3].Date,
                                           data3:rows[length-3].ID,
                                           type3: rows[length-3].KIND ,
                                           title4: rows[length-4].Title,
                                           date4: rows[length-4].Date,
                                           data4:rows[length-4].ID,
                                           type4: rows[length-4].KIND ,
                                           title5: rows[length-5].Title,
                                           date5: rows[length-5].Date,
                                           data5:rows[length-5].ID,
                                           type5: rows[length-5].KIND ,
                                           title6: rows[length-6].Title,
                                           date6: rows[length-6].Date,
                                           data6:rows[length-6].ID,
                                           type6: rows[length-6].KIND ,
                                           title7: rows[length-7].Title,
                                           date7: rows[length-7].Date,
                                           data7:rows[length-7].ID,
                                           type7: rows[length-7].KIND ,
                                           title8: rows[length-8].Title,
                                           date8: rows[length-8].Date,
                                           data8:rows[length-8].ID,
                                           type8: rows[length-8].KIND ,
                                           title9: rows[length-9].Title,
                                           date9: rows[length-9].Date,
                                           data9:rows[length-9].ID,
                                           type9: rows[length-9].KIND ,
                                           title10: rows[length-10].Title,
                                           date10: rows[length-10].Date,
                                           data10:rows[length-10].ID,
                                           type10: rows[length-10].KIND 
                                                                });
            
            
            
                        var file = '../MantiHTML/NewsPosts/NewsTitle1.json';
                        jsonfile.writeFile(file, rows[length-1], function (err) {
                        console.error(err)});
                        var file = '../MantiHTML/NewsPosts/NewsTitle2.json';
                        jsonfile.writeFile(file, rows[length-2], function (err) {
                        console.error(err)});
                        var file = '../MantiHTML/NewsPosts/NewsTitle3.json';
                        jsonfile.writeFile(file, rows[length-3], function (err) {
                        console.error(err)});
                        var file = '../MantiHTML/NewsPosts/NewsTitle4.json';
                        jsonfile.writeFile(file, rows[length-4], function (err) {
                        console.error(err)});
                        var file = '../MantiHTML/NewsPosts/NewsTitle5.json';
                        jsonfile.writeFile(file, rows[length-5], function (err) {
                        console.error(err)});
                        var file = '../MantiHTML/NewsPosts/NewsTitle6.json';
                        jsonfile.writeFile(file, rows[length-6], function (err) {
                        console.error(err)});
                        var file = '../MantiHTML/NewsPosts/NewsTitle7.json';
                        jsonfile.writeFile(file, rows[length-7], function (err) {
                        console.error(err)});
                        var file = '../MantiHTML/NewsPosts/NewsTitle8.json';
                        jsonfile.writeFile(file, rows[length-8], function (err) {
                        console.error(err)});
                        var file = '../MantiHTML/NewsPosts/NewsTitle9.json';
                        jsonfile.writeFile(file, rows[length-9], function (err) {
                        console.error(err)});
                        var file = '../MantiHTML/NewsPosts/NewsTitle10.json';
                        jsonfile.writeFile(file, rows[length-10], function (err) {
                        console.error(err)});               
            
            
            
            });
    
                        connection.query('SELECT Thread_title as TITLE, Category_Name as Category, Thread_Date as Date, Thread_message as Message, "" as URL from Threads WHERE Category_Name = "news" UNION SELECT Post_title, Category_Name, Post_date, Posts_message , Post_URL from Posts WHERE Category_Name = "news" ORDER BY Date,TITLE' , function(err, rows,fields) {
            if (err){throw err;}
            var length = rows.length;
            
 var x=JSON.stringify(rows[length-1]);
                        var x=JSON.parse("["+x+"]");
                        var file = '../MantiHTML/NewsPosts/NewsData1.json';
                        jsonfile.writeFile(file, x, function (err) {
                        console.error(err)});
                        x="["+JSON.stringify(rows[length-2])+"]";
                        x=JSON.parse(x);
                        var file = '../MantiHTML/NewsPosts/NewsData2.json';
                        jsonfile.writeFile(file, x, function (err) {
                        console.error(err)});
                        x="["+JSON.stringify(rows[length-3])+"]";
                        x=JSON.parse(x);
                        var file = '../MantiHTML/NewsPosts/NewsData3.json';
                        jsonfile.writeFile(file, x, function (err) {
                        console.error(err)});
                        x="["+JSON.stringify(rows[length-4])+"]";
                        x=JSON.parse(x);
                        var file = '../MantiHTML/NewsPosts/NewsData4.json';
                        jsonfile.writeFile(file,x, function (err) {
                        console.error(err)});
                        x="["+JSON.stringify(rows[length-5])+"]";
                        x=JSON.parse(x);
                        var file = '../MantiHTML/NewsPosts/NewsData5.json';
                        jsonfile.writeFile(file, x, function (err) {
                        console.error(err)});
                        x="["+JSON.stringify(rows[length-6])+"]";
                        x=JSON.parse(x);
                        var file = '../MantiHTML/NewsPosts/NewsData6.json';
                        jsonfile.writeFile(file, x, function (err) {
                        console.error(err)});
                        x="["+JSON.stringify(rows[length-7])+"]";
                        x=JSON.parse(x);
                        var file = '../MantiHTML/NewsPosts/NewsData7.json';
                        jsonfile.writeFile(file, x, function (err) {
                        console.error(err)});
                        x="["+JSON.stringify(rows[length-8])+"]";
                        x=JSON.parse(x);
                        var file = '../MantiHTML/NewsPosts/NewsData8.json';
                        jsonfile.writeFile(file, x, function (err) {
                        console.error(err)});
                        x="["+JSON.stringify(rows[length-9])+"]";
                        x=JSON.parse(x);
                        var file = '../MantiHTML/NewsPosts/NewsData9.json';
                        jsonfile.writeFile(file, x, function (err) {
                        console.error(err)});
                        x="["+JSON.stringify(rows[length-10])+"]";
                        x=JSON.parse(x);
                        var file = '../MantiHTML/NewsPosts/NewsData10.json';
                        jsonfile.writeFile(file,x ,function (err) {
                        console.error(err)});  
                
            });
    
        });

app.get('/philosophy', function(req, res){
        jsonfile.writeFile(file, "philosophy", function (err) {
            console.error(err)
        });
                connection.query('SELECT Thread_ID as ID, Thread_title as Title, Category_Name as Category, Thread_Date as Date, true as "Check" from Threads WHERE Category_Name = "philosophy" UNION SELECT Post_ID, Post_title, Category_Name, Post_date, false from posts WHERE Category_Name = "philosophy" ORDER BY Date,Title' , function(err, rows,fields) {
            if (err){throw err;}
            var length = rows.length;
            
                    console.log('success')
                    res.render('PhilosophyPage', {subPageName: 'philosophy',
                                           title1: rows[length-1].Title,
                                           date1: rows[length-1].Date,
                                           data1:rows[length-1].ID,
                                           type1: rows[length-1].KIND ,
                                           title2: rows[length-2].Title,
                                           date2: rows[length-2].Date,
                                           data2:rows[length-2].ID,
                                           type2: rows[length-2].KIND ,
                                           title3: rows[length-3].Title,
                                           date3: rows[length-3].Date,
                                           data3:rows[length-3].ID,
                                           type3: rows[length-3].KIND ,
                                           title4: rows[length-4].Title,
                                           date4: rows[length-4].Date,
                                           data4:rows[length-4].ID,
                                           type4: rows[length-4].KIND ,
                                           title5: rows[length-5].Title,
                                           date5: rows[length-5].Date,
                                           data5:rows[length-5].ID,
                                           type5: rows[length-5].KIND ,
                                           title6: rows[length-6].Title,
                                           date6: rows[length-6].Date,
                                           data6:rows[length-6].ID,
                                           type6: rows[length-6].KIND ,
                                           title7: rows[length-7].Title,
                                           date7: rows[length-7].Date,
                                           data7:rows[length-7].ID,
                                           type7: rows[length-7].KIND ,
                                           title8: rows[length-8].Title,
                                           date8: rows[length-8].Date,
                                           data8:rows[length-8].ID,
                                           type8: rows[length-8].KIND ,
                                           title9: rows[length-9].Title,
                                           date9: rows[length-9].Date,
                                           data9:rows[length-9].ID,
                                           type9: rows[length-9].KIND ,
                                           title10: rows[length-10].Title,
                                           date10: rows[length-10].Date,
                                           data10:rows[length-10].ID,
                                           type10: rows[length-10].KIND 
                                                                });
            
            
            
                        var file = '../MantiHTML/PhilosophyPosts/PhilosophyTitle1.json';
                        jsonfile.writeFile(file, rows[length-1], function (err) {
                        console.error(err)});
                        var file = '../MantiHTML/PhilosophyPosts/PhilosophyTitle2.json';
                        jsonfile.writeFile(file, rows[length-2], function (err) {
                        console.error(err)});
                        var file = '../MantiHTML/PhilosophyPosts/PhilosophyTitle3.json';
                        jsonfile.writeFile(file, rows[length-3], function (err) {
                        console.error(err)});
                        var file = '../MantiHTML/PhilosophyPosts/PhilosophyTitle4.json';
                        jsonfile.writeFile(file, rows[length-4], function (err) {
                        console.error(err)});
                        var file = '../MantiHTML/PhilosophyPosts/PhilosophyTitle5.json';
                        jsonfile.writeFile(file, rows[length-5], function (err) {
                        console.error(err)});
                        var file = '../MantiHTML/PhilosophyPosts/PhilosophyTitle6.json';
                        jsonfile.writeFile(file, rows[length-6], function (err) {
                        console.error(err)});
                        var file = '../MantiHTML/PhilosophyPosts/PhilosophyTitle7.json';
                        jsonfile.writeFile(file, rows[length-7], function (err) {
                        console.error(err)});
                        var file = '../MantiHTML/PhilosophyPosts/PhilosophyTitle8.json';
                        jsonfile.writeFile(file, rows[length-8], function (err) {
                        console.error(err)});
                        var file = '../MantiHTML/PhilosophyPosts/PhilosophyTitle9.json';
                        jsonfile.writeFile(file, rows[length-9], function (err) {
                        console.error(err)});
                        var file = '../MantiHTML/PhilosophyPosts/PhilosophyTitle10.json';
                        jsonfile.writeFile(file, rows[length-10], function (err) {
                        console.error(err)});               
            
            
            
            });
    
                        connection.query('SELECT Thread_title as TITLE, Category_Name as Category, Thread_Date as Date, Thread_message as Message, "" as URL from Threads WHERE Category_Name = "philosophy" UNION SELECT Post_title, Category_Name, Post_date, Posts_message , Post_URL from Posts WHERE Category_Name = "philosophy" ORDER BY Date,TITLE' , function(err, rows,fields) {
            if (err){throw err;}
            var length = rows.length;
  var x=JSON.stringify(rows[length-1]);
                        var x=JSON.parse("["+x+"]");
                        var file = '../MantiHTML/PhilosophyPosts/PhilosophyData1.json';
                        jsonfile.writeFile(file, x, function (err) {
                        console.error(err)});
                        x="["+JSON.stringify(rows[length-2])+"]";
                        x=JSON.parse(x);
                        var file = '../MantiHTML/PhilosophyPosts/PhilosophyData2.json';
                        jsonfile.writeFile(file, x, function (err) {
                        console.error(err)});
                        x="["+JSON.stringify(rows[length-3])+"]";
                        x=JSON.parse(x);
                        var file = '../MantiHTML/PhilosophyPosts/PhilosophyData3.json';
                        jsonfile.writeFile(file, x, function (err) {
                        console.error(err)});
                        x="["+JSON.stringify(rows[length-4])+"]";
                        x=JSON.parse(x);
                        var file = '../MantiHTML/PhilosophyPosts/PhilosophyData4.json';
                        jsonfile.writeFile(file,x, function (err) {
                        console.error(err)});
                        x="["+JSON.stringify(rows[length-5])+"]";
                        x=JSON.parse(x);
                        var file = '../MantiHTML/PhilosophyPosts/PhilosophyData5.json';
                        jsonfile.writeFile(file, x, function (err) {
                        console.error(err)});
                        x="["+JSON.stringify(rows[length-6])+"]";
                        x=JSON.parse(x);
                        var file = '../MantiHTML/PhilosophyPosts/PhilosophyData6.json';
                        jsonfile.writeFile(file, x, function (err) {
                        console.error(err)});
                        x="["+JSON.stringify(rows[length-7])+"]";
                        x=JSON.parse(x);
                        var file = '../MantiHTML/PhilosophyPosts/PhilosophyData7.json';
                        jsonfile.writeFile(file, x, function (err) {
                        console.error(err)});
                        x="["+JSON.stringify(rows[length-8])+"]";
                        x=JSON.parse(x);
                        var file = '../MantiHTML/PhilosophyPosts/PhilosophyData8.json';
                        jsonfile.writeFile(file, x, function (err) {
                        console.error(err)});
                        x="["+JSON.stringify(rows[length-9])+"]";
                        x=JSON.parse(x);
                        var file = '../MantiHTML/PhilosophyPosts/PhilosophyData9.json';
                        jsonfile.writeFile(file, x, function (err) {
                        console.error(err)});
                        x="["+JSON.stringify(rows[length-10])+"]";
                        x=JSON.parse(x);
                        var file = '../MantiHTML/PhilosophyPosts/PhilosophyData10.json';
                        jsonfile.writeFile(file,x ,function (err) {
                        console.error(err)});  
                
            });
        });

app.get('/ScienceAndTechnology', function(req, res){        
        jsonfile.writeFile(file, "ScienceAndTechnology", function (err) {
            console.error(err)
        });
                connection.query('SELECT Thread_ID as ID, Thread_title as Title, Category_Name as Category, Thread_Date as Date, true as "Check" from Threads WHERE Category_Name = "scienceandtechnology" UNION SELECT Post_ID, Post_title, Category_Name, Post_date, false from posts WHERE Category_Name = "scienceandtechnology" ORDER BY Date,Title' , function(err, rows,fields) {
            if (err){throw err;}
            var length = rows.length;
            
                    console.log('success')
                    res.render('ScienceAndTechnologyPage', {subPageName: 'Science and Technology',
                                           title1: rows[length-1].Title,
                                           date1: rows[length-1].Date,
                                           data1:rows[length-1].ID,
                                           type1: rows[length-1].KIND ,
                                           title2: rows[length-2].Title,
                                           date2: rows[length-2].Date,
                                           data2:rows[length-2].ID,
                                           type2: rows[length-2].KIND ,
                                           title3: rows[length-3].Title,
                                           date3: rows[length-3].Date,
                                           data3:rows[length-3].ID,
                                           type3: rows[length-3].KIND ,
                                           title4: rows[length-4].Title,
                                           date4: rows[length-4].Date,
                                           data4:rows[length-4].ID,
                                           type4: rows[length-4].KIND ,
                                           title5: rows[length-5].Title,
                                           date5: rows[length-5].Date,
                                           data5:rows[length-5].ID,
                                           type5: rows[length-5].KIND ,
                                           title6: rows[length-6].Title,
                                           date6: rows[length-6].Date,
                                           data6:rows[length-6].ID,
                                           type6: rows[length-6].KIND ,
                                           title7: rows[length-7].Title,
                                           date7: rows[length-7].Date,
                                           data7:rows[length-7].ID,
                                           type7: rows[length-7].KIND ,
                                           title8: rows[length-8].Title,
                                           date8: rows[length-8].Date,
                                           data8:rows[length-8].ID,
                                           type8: rows[length-8].KIND ,
                                           title9: rows[length-9].Title,
                                           date9: rows[length-9].Date,
                                           data9:rows[length-9].ID,
                                           type9: rows[length-9].KIND ,
                                           title10: rows[length-10].Title,
                                           date10: rows[length-10].Date,
                                           data10:rows[length-10].ID,
                                           type10: rows[length-10].KIND 
                                                                });
            
            
            
                        var file = '../MantiHTML/ScienceAndTechnologyPosts/ScienceAndTechnologyTitle1.json';
                        jsonfile.writeFile(file, rows[length-1], function (err) {
                        console.error(err)});
                        var file = '../MantiHTML/ScienceAndTechnologyPosts/ScienceAndTechnologyTitle2.json';
                        jsonfile.writeFile(file, rows[length-2], function (err) {
                        console.error(err)});
                        var file = '../MantiHTML/ScienceAndTechnologyPosts/ScienceAndTechnologyTitle3.json';
                        jsonfile.writeFile(file, rows[length-3], function (err) {
                        console.error(err)});
                        var file = '../MantiHTML/ScienceAndTechnologyPosts/ScienceAndTechnologyTitle4.json';
                        jsonfile.writeFile(file, rows[length-4], function (err) {
                        console.error(err)});
                        var file = '../MantiHTML/ScienceAndTechnologyPosts/ScienceAndTechnologyTitle5.json';
                        jsonfile.writeFile(file, rows[length-5], function (err) {
                        console.error(err)});
                        var file = '../MantiHTML/ScienceAndTechnologyPosts/ScienceAndTechnologyTitle6.json';
                        jsonfile.writeFile(file, rows[length-6], function (err) {
                        console.error(err)});
                        var file = '../MantiHTML/ScienceAndTechnologyPosts/ScienceAndTechnologyTitle7.json';
                        jsonfile.writeFile(file, rows[length-7], function (err) {
                        console.error(err)});
                        var file = '../MantiHTML/ScienceAndTechnologyPosts/ScienceAndTechnologyTitle8.json';
                        jsonfile.writeFile(file, rows[length-8], function (err) {
                        console.error(err)});
                        var file = '../MantiHTML/ScienceAndTechnologyPosts/ScienceAndTechnologyTitle9.json';
                        jsonfile.writeFile(file, rows[length-9], function (err) {
                        console.error(err)});
                        var file = '../MantiHTML/ScienceAndTechnologyPosts/ScienceAndTechnologyTitle10.json';
                        jsonfile.writeFile(file, rows[length-10], function (err) {
                        console.error(err)});               
            
            
            
            });
    
                        connection.query('SELECT Thread_title as TITLE, Category_Name as Category, Thread_Date as Date, Thread_message as Message, "" as URL from Threads WHERE Category_Name = "scienceandtechnology" UNION SELECT Post_title, Category_Name, Post_date, Posts_message , Post_URL from Posts WHERE Category_Name = "scienceandtechnology" ORDER BY Date,TITLE' , function(err, rows,fields) {
            if (err){throw err;}
            var length = rows.length;
            
 var x=JSON.stringify(rows[length-1]);
                        var x=JSON.parse("["+x+"]");
                        var file = '../MantiHTML/ScienceAndTechnologyPosts/ScienceAndTechnologyData1.json';
                        jsonfile.writeFile(file, x, function (err) {
                        console.error(err)});
                        x="["+JSON.stringify(rows[length-2])+"]";
                        x=JSON.parse(x);
                        var file = '../MantiHTML/ScienceAndTechnologyPosts/ScienceAndTechnologyData2.json';
                        jsonfile.writeFile(file, x, function (err) {
                        console.error(err)});
                        x="["+JSON.stringify(rows[length-3])+"]";
                        x=JSON.parse(x);
                        var file = '../MantiHTML/ScienceAndTechnologyPosts/ScienceAndTechnologyData3.json';
                        jsonfile.writeFile(file, x, function (err) {
                        console.error(err)});
                        x="["+JSON.stringify(rows[length-4])+"]";
                        x=JSON.parse(x);
                        var file = '../MantiHTML/ScienceAndTechnologyPosts/ScienceAndTechnologyData4.json';
                        jsonfile.writeFile(file,x, function (err) {
                        console.error(err)});
                        x="["+JSON.stringify(rows[length-5])+"]";
                        x=JSON.parse(x);
                        var file = '../MantiHTML/ScienceAndTechnologyPosts/ScienceAndTechnologyData5.json';
                        jsonfile.writeFile(file, x, function (err) {
                        console.error(err)});
                        x="["+JSON.stringify(rows[length-6])+"]";
                        x=JSON.parse(x);
                        var file = '../MantiHTML/ScienceAndTechnologyPosts/ScienceAndTechnologyData6.json';
                        jsonfile.writeFile(file, x, function (err) {
                        console.error(err)});
                        x="["+JSON.stringify(rows[length-7])+"]";
                        x=JSON.parse(x);
                        var file = '../MantiHTML/ScienceAndTechnologyPosts/ScienceAndTechnologyData7.json';
                        jsonfile.writeFile(file, x, function (err) {
                        console.error(err)});
                        x="["+JSON.stringify(rows[length-8])+"]";
                        x=JSON.parse(x);
                        var file = '../MantiHTML/ScienceAndTechnologyPosts/ScienceAndTechnologyData8.json';
                        jsonfile.writeFile(file, x, function (err) {
                        console.error(err)});
                        x="["+JSON.stringify(rows[length-9])+"]";
                        x=JSON.parse(x);
                        var file = '../MantiHTML/ScienceAndTechnologyPosts/ScienceAndTechnologyData9.json';
                        jsonfile.writeFile(file, x, function (err) {
                        console.error(err)});
                        x="["+JSON.stringify(rows[length-10])+"]";
                        x=JSON.parse(x);
                        var file = '../MantiHTML/ScienceAndTechnologyPosts/ScienceAndTechnologyData10.json';
                        jsonfile.writeFile(file,x, function (err) {
                        console.error(err)});  
                
            });
        });

app.get('/CodingHelp', function(req, res){
        jsonfile.writeFile(file, "CodingHelp", function (err) {
            console.error(err)
        });
                connection.query('SELECT Thread_ID as ID, Thread_title as Title, Category_Name as Category, Thread_Date as Date, true as "Check" from Threads WHERE Category_Name = "codinghelp" UNION SELECT Post_ID, Post_title, Category_Name, Post_date, false from posts WHERE Category_Name = "codinghelp" ORDER BY Date,Title' , function(err, rows,fields) {
            if (err){throw err;}
            var length = rows.length;
            
                    console.log('success')
                    res.render('CodingHelpPage', {subPageName: 'Coding Help',
                                           title1: rows[length-1].Title,
                                           date1: rows[length-1].Date,
                                           data1:rows[length-1].ID,
                                           type1: rows[length-1].KIND ,
                                           title2: rows[length-2].Title,
                                           date2: rows[length-2].Date,
                                           data2:rows[length-2].ID,
                                           type2: rows[length-2].KIND ,
                                           title3: rows[length-3].Title,
                                           date3: rows[length-3].Date,
                                           data3:rows[length-3].ID,
                                           type3: rows[length-3].KIND ,
                                           title4: rows[length-4].Title,
                                           date4: rows[length-4].Date,
                                           data4:rows[length-4].ID,
                                           type4: rows[length-4].KIND ,
                                           title5: rows[length-5].Title,
                                           date5: rows[length-5].Date,
                                           data5:rows[length-5].ID,
                                           type5: rows[length-5].KIND ,
                                           title6: rows[length-6].Title,
                                           date6: rows[length-6].Date,
                                           data6:rows[length-6].ID,
                                           type6: rows[length-6].KIND ,
                                           title7: rows[length-7].Title,
                                           date7: rows[length-7].Date,
                                           data7:rows[length-7].ID,
                                           type7: rows[length-7].KIND ,
                                           title8: rows[length-8].Title,
                                           date8: rows[length-8].Date,
                                           data8:rows[length-8].ID,
                                           type8: rows[length-8].KIND ,
                                           title9: rows[length-9].Title,
                                           date9: rows[length-9].Date,
                                           data9:rows[length-9].ID,
                                           type9: rows[length-9].KIND ,
                                           title10: rows[length-10].Title,
                                           date10: rows[length-10].Date,
                                           data10:rows[length-10].ID,
                                           type10: rows[length-10].KIND 
                                                                });
            
            
            
                        var file = '../MantiHTML/CodingHelpPosts/CodingHelpTitle1.json';
                        jsonfile.writeFile(file, rows[length-1], function (err) {
                        console.error(err)});
                        var file = '../MantiHTML/CodingHelpPosts/CodingHelpTitle2.json';
                        jsonfile.writeFile(file, rows[length-2], function (err) {
                        console.error(err)});
                        var file = '../MantiHTML/CodingHelpPosts/CodingHelpTitle3.json';
                        jsonfile.writeFile(file, rows[length-3], function (err) {
                        console.error(err)});
                        var file = '../MantiHTML/CodingHelpPosts/CodingHelpTitle4.json';
                        jsonfile.writeFile(file, rows[length-4], function (err) {
                        console.error(err)});
                        var file = '../MantiHTML/CodingHelpPosts/CodingHelpTitle5.json';
                        jsonfile.writeFile(file, rows[length-5], function (err) {
                        console.error(err)});
                        var file = '../MantiHTML/CodingHelpPosts/CodingHelpTitle6.json';
                        jsonfile.writeFile(file, rows[length-6], function (err) {
                        console.error(err)});
                        var file = '../MantiHTML/CodingHelpPosts/CodingHelpTitle7.json';
                        jsonfile.writeFile(file, rows[length-7], function (err) {
                        console.error(err)});
                        var file = '../MantiHTML/CodingHelpPosts/CodingHelpTitle8.json';
                        jsonfile.writeFile(file, rows[length-8], function (err) {
                        console.error(err)});
                        var file = '../MantiHTML/CodingHelpPosts/CodingHelpTitle9.json';
                        jsonfile.writeFile(file, rows[length-9], function (err) {
                        console.error(err)});
                        var file = '../MantiHTML/CodingHelpPosts/CodingHelpTitle10.json';
                        jsonfile.writeFile(file, rows[length-10], function (err) {
                        console.error(err)});               
            
            
            
            });
    
                        connection.query('SELECT Thread_title as TITLE, Category_Name as Category, Thread_Date as Date, Thread_message as Message, "" as URL from Threads WHERE Category_Name = "codinghelp" UNION SELECT Post_title, Category_Name, Post_date, Posts_message , Post_URL from Posts WHERE Category_Name = "codinghelp" ORDER BY Date,TITLE' , function(err, rows,fields) {
            if (err){throw err;}
            var length = rows.length;
    var x=JSON.stringify(rows[length-1]);
                        var x=JSON.parse("["+x+"]");
                        var file = '../MantiHTML/CodingHelpPosts/CodingHelpData1.json';
                        jsonfile.writeFile(file, x, function (err) {
                        console.error(err)});
                        x="["+JSON.stringify(rows[length-2])+"]";
                        x=JSON.parse(x);
                        var file = '../MantiHTML/CodingHelpPosts/CodingHelpData2.json';
                        jsonfile.writeFile(file, x, function (err) {
                        console.error(err)});
                        x="["+JSON.stringify(rows[length-3])+"]";
                        x=JSON.parse(x);
                        var file = '../MantiHTML/CodingHelpPosts/CodingHelpData3.json';
                        jsonfile.writeFile(file, x, function (err) {
                        console.error(err)});
                        x="["+JSON.stringify(rows[length-4])+"]";
                        x=JSON.parse(x);
                        var file = '../MantiHTML/CodingHelpPosts/CodingHelpData4.json';
                        jsonfile.writeFile(file,x, function (err) {
                        console.error(err)});
                        x="["+JSON.stringify(rows[length-5])+"]";
                        x=JSON.parse(x);
                        var file = '../MantiHTML/CodingHelpPosts/CodingHelpData5.json';
                        jsonfile.writeFile(file, x, function (err) {
                        console.error(err)});
                        x="["+JSON.stringify(rows[length-6])+"]";
                        x=JSON.parse(x);
                        var file = '../MantiHTML/CodingHelpPosts/CodingHelpData6.json';
                        jsonfile.writeFile(file, x, function (err) {
                        console.error(err)});
                        x="["+JSON.stringify(rows[length-7])+"]";
                        x=JSON.parse(x);
                        var file = '../MantiHTML/CodingHelpPosts/CodingHelpData7.json';
                        jsonfile.writeFile(file, x, function (err) {
                        console.error(err)});
                        x="["+JSON.stringify(rows[length-8])+"]";
                        x=JSON.parse(x);
                        var file = '../MantiHTML/CodingHelpPosts/CodingHelpData8.json';
                        jsonfile.writeFile(file, x, function (err) {
                        console.error(err)});
                        x="["+JSON.stringify(rows[length-9])+"]";
                        x=JSON.parse(x);
                        var file = '../MantiHTML/CodingHelpPosts/CodingHelpData9.json';
                        jsonfile.writeFile(file, x, function (err) {
                        console.error(err)});
                        x="["+JSON.stringify(rows[length-10])+"]";
                        x=JSON.parse(x);
                        var file = '../MantiHTML/CodingHelpPosts/CodingHelpData10.json';
                        jsonfile.writeFile(file,x, function (err) {
                        console.error(err)});   
                
            });
        });
app.listen(4000);