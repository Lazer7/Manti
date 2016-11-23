var mysql = require('mysql');

var titles= "Titles";

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

connection.query('SELECT Post_title as TITLE, Category_Name as Category, Post_date as Date from Posts', function(err, rows,fields) {
  if (err){throw err;}
    else{
     setValue(rows);
    }
});

connection.query('SELECT * FROM postcomment', function(err, rice,fields) {
 if (err){throw err;}
     else{
             setComments(rice);  
     }
  });

function setValue(values){
    titles=values;
    var jsonfile = require('jsonfile')
    var file = '../MantiHTML/data.json'
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
  
