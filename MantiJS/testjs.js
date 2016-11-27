var mysql = require('mysql');

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

connection.end();
});

