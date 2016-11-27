//<<<<<<< HEAD
/*
So here is the code and written with node.js
WriteFile has been done synchronously
*/


var id = '';
var type = '';
var fs = require('fs');
/*Will create two files in .txt format
Once it creates the file, I assumed the data will be immediately be extracted.
If a user clicks on post1, id and type txt will be created
Later if user clicks on post2(or any other other post), the previous created txt
files will be overwritten. So this should work... If not just tell me what went wrong,
I'll fix it
*/

document.getElementById('post1').onclick = function(){
    id = document.getElementById('title1').getAttribute('data');
    type = document.getElementById('date1').getAttribute('type');
    fs.writeFile('id.txt', id.toString);
    fs.writeFile('type.txt', type.toString);
    window.location = "http://localhost/Manti/MantiHtml/PostTemplate.php";
}
document.getElementById('post2').onclick = function(){
    id = document.getElementById('title2').getAttribute('data');
    type = document.getElementById('date2').getAttribute('type');
    fs.writeFile('id.txt', id.toString);
    fs.writeFile('type.txt', type.toString);
    window.location = "http://localhost/Manti/MantiHtml/PostTemplate.php";
}

document.getElementById('post3').onclick = function(){
    id = document.getElementById('title3').getAttribute('data');
    type = document.getElementById('date3').getAttribute('type');
    fs.writeFile('id.txt', id.toString);
    fs.writeFile('type.txt', type.toString);
    window.location = "http://localhost/Manti/MantiHtml/PostTemplate.php";
}

document.getElementById('post4').onclick = function(){
    id = document.getElementById('title4').getAttribute('data');
    type = document.getElementById('date4').getAttribute('type');
    fs.writeFile('id.txt', id.toString);
    fs.writeFile('type.txt', type.toString);
    window.location = "http://localhost/Manti/MantiHtml/PostTemplate.php";
}

document.getElementById('post5').onclick = function(){
    id = document.getElementById('title5').getAttribute('data');
    type = document.getElementById('date5').getAttribute('type');
    fs.writeFile('id.txt', id.toString);
    fs.writeFile('type.txt', type.toString);
    window.location = "http://localhost/Manti/MantiHtml/PostTemplate.php";
}

document.getElementById('post6').onclick = function(){
    id = document.getElementById('title6').getAttribute('data');
    type = document.getElementById('date6').getAttribute('type');
    fs.writeFile('id.txt', id.toString);
    fs.writeFile('type.txt', type.toString);
    window.location = "http://localhost/Manti/MantiHtml/PostTemplate.php";
}

document.getElementById('post7').onclick = function(){
    id = document.getElementById('title7').getAttribute('data');
    type = document.getElementById('date7').getAttribute('type');
    fs.writeFile('id.txt', id.toString);
    fs.writeFile('type.txt', type.toString);
    window.location = "http://localhost/Manti/MantiHtml/PostTemplate.php";
}

document.getElementById('post8').onclick = function(){
    id = document.getElementById('title8').getAttribute('data');
    type = document.getElementById('date8').getAttribute('type');
    fs.writeFile('id.txt', id.toString);
    fs.writeFile('type.txt', type.toString);
    window.location = "http://localhost/Manti/MantiHtml/PostTemplate.php";
}

document.getElementById('post9').onclick = function(){
    id = document.getElementById('title9').getAttribute('data');
    type = document.getElementById('date9').getAttribute('type');
    fs.writeFile('id.txt', id);
    fs.writeFile('type.txt', type);
    window.location = "http://localhost/Manti/MantiHtml/PostTemplate.php";
}

document.getElementById('post10').onclick = function(){
    id = document.getElementById('title10').getAttribute('data');
    type = document.getElementById('date10').getAttribute('type');
    fs.writeFile('id.txt', id);
    fs.writeFile('type.txt', type);
    window.location = "http://localhost/Manti/MantiHtml/PostTemplate.php";
=======
/*
So here is the code and written with node.js
WriteFile has been done synchronously
*/


var id = '';
var type = '';
var fs = require('fs');
/*Will create two files in .txt format
Once it creates the file, I assumed the data will be immediately be extracted.
If a user clicks on post1, id and type txt will be created
Later if user clicks on post2(or any other other post), the previous created txt
files will be overwritten. So this should work... If not just tell me what went wrong,
I'll fix it

*/

document.getElementById('post1').onclick = function(){
    id = document.getElementById('title1').getAttribute('data');
    type = document.getElementById('date1').getAttribute('type');
    fs.writeFile('id.txt', id);
    fs.writeFile('type.txt', type);
    window.location = "http://localhost/Manti/MantiHtml/PostTemplate.php";
}
document.getElementById('post2').onclick = function(){
    id = document.getElementById('title2').getAttribute('data');
    type = document.getElementById('date2').getAttribute('type');
    fs.writeFile('id.txt', id.toString);
    fs.writeFile('type.txt', type.toString);
    window.location = "http://localhost/Manti/MantiHtml/PostTemplate.php";
}

document.getElementById('post3').onclick = function(){
    id = document.getElementById('title3').getAttribute('data');
    type = document.getElementById('date3').getAttribute('type');
    fs.writeFile('id.txt', id.toString);
    fs.writeFile('type.txt', type.toString);
    window.location = "http://localhost/Manti/MantiHtml/PostTemplate.php";
}

document.getElementById('post4').onclick = function(){
    id = document.getElementById('title4').getAttribute('data');
    type = document.getElementById('date4').getAttribute('type');
    fs.writeFile('id.txt', id.toString);
    fs.writeFile('type.txt', type.toString);
    window.location = "http://localhost/Manti/MantiHtml/PostTemplate.php";
}

document.getElementById('post5').onclick = function(){
    id = document.getElementById('title5').getAttribute('data');
    type = document.getElementById('date5').getAttribute('type');
    fs.writeFile('id.txt', id.toString);
    fs.writeFile('type.txt', type.toString);
    window.location = "http://localhost/Manti/MantiHtml/PostTemplate.php";
}

document.getElementById('post6').onclick = function(){
    id = document.getElementById('title6').getAttribute('data');
    type = document.getElementById('date6').getAttribute('type');
    fs.writeFile('id.txt', id.toString);
    fs.writeFile('type.txt', type.toString);
    window.location = "http://localhost/Manti/MantiHtml/PostTemplate.php";
}

document.getElementById('post7').onclick = function(){
    id = document.getElementById('title7').getAttribute('data');
    type = document.getElementById('date7').getAttribute('type');
    fs.writeFile('id.txt', id.toString);
    fs.writeFile('type.txt', type.toString);
    window.location = "http://localhost/Manti/MantiHtml/PostTemplate.php";
}

document.getElementById('post8').onclick = function(){
    id = document.getElementById('title8').getAttribute('data');
    type = document.getElementById('date8').getAttribute('type');
    fs.writeFile('id.txt', id.toString);
    fs.writeFile('type.txt', type.toString);
    window.location = "http://localhost/Manti/MantiHtml/PostTemplate.php";
}

document.getElementById('post9').onclick = function(){
    id = document.getElementById('title9').getAttribute('data');
    type = document.getElementById('date9').getAttribute('type');
    fs.writeFile('id.txt', id.toString);
    fs.writeFile('type.txt', type.toString);
    window.location = "http://localhost/Manti/MantiHtml/PostTemplate.php";
}

document.getElementById('post10').onclick = function(){
    id = document.getElementById('title10').getAttribute('data');
    type = document.getElementById('date10').getAttribute('type');
    fs.writeFile('id.txt', id.toString);
    fs.writeFile('type.txt', type.toString);
    window.location = "http://localhost/Manti/MantiHtml/PostTemplate.php";
//>>>>>>> 39c6110103544ec825df52d65db377ac668da81c
}