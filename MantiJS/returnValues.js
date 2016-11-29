var id = '';
var type = '';
var txtFile="storedata.txt";
var file= new File(txtFile);
file.open("w");
document.getElementById('post1').onclick = function(){
    id = document.getElementById('title1').getAttribute('data');
    type = document.getElementById('date1').getAttribute('type');
    file.writeln(id);
    file.writeln(type);
    window.location = "http://localhost/Manti/MantiHtml/PostTemplate.php";
    
}

document.getElementById('post2').onclick = function(){
    id = document.getElementById('title2').getAttribute('data');
    type = document.getElementById('date2').getAttribute('type');
        file.writeln(id);
    file.writeln(type);
     window.location = "http://localhost/Manti/MantiHtml/PostTemplate.php";
}

document.getElementById('post3').onclick = function(){
    id = document.getElementById('title3').getAttribute('data');
    type = document.getElementById('date3').getAttribute('type');
        file.writeln(id);
    file.writeln(type);
     window.location = "http://localhost/Manti/MantiHtml/PostTemplate.php";
}

document.getElementById('post4').onclick = function(){
    id = document.getElementById('title4').getAttribute('data');
    type = document.getElementById('date4').getAttribute('type');
        file.writeln(id);
    file.writeln(type);
     window.location = "http://localhost/Manti/MantiHtml/PostTemplate.php";
}

document.getElementById('post5').onclick = function(){
    id = document.getElementById('title5').getAttribute('data');
    type = document.getElementById('date5').getAttribute('type');
        file.writeln(id);
    file.writeln(type);
     window.location = "http://localhost/Manti/MantiHtml/PostTemplate.php";
}

document.getElementById('post6').onclick = function(){
    id = document.getElementById('title6').getAttribute('data');
    type = document.getElementById('date6').getAttribute('type');
        file.writeln(id);
    file.writeln(type);
     window.location = "http://localhost/Manti/MantiHtml/PostTemplate.php";
}

document.getElementById('post7').onclick = function(){
    id = document.getElementById('title7').getAttribute('data');
    type = document.getElementById('date7').getAttribute('type');
        file.writeln(id);
    file.writeln(type);
     window.location = "http://localhost/Manti/MantiHtml/PostTemplate.php";
}

document.getElementById('post8').onclick = function(){
    id = document.getElementById('title8').getAttribute('data');
    type = document.getElementById('date8').getAttribute('type');
        file.writeln(id);
    file.writeln(type);
     window.location = "http://localhost/Manti/MantiHtml/PostTemplate.php";
}

document.getElementById('post9').onclick = function(){
    id = document.getElementById('title9').getAttribute('data');
    type = document.getElementById('date9').getAttribute('type');
        file.writeln(id);
    file.writeln(type);
     window.location = "http://localhost/Manti/MantiHtml/PostTemplate.php";
}

document.getElementById('post10').onclick = function(){
    id = document.getElementById('title10').getAttribute('data');
    type = document.getElementById('date10').getAttribute('type');
        file.writeln(id);
    file.writeln(type);
     window.location = "http://localhost/Manti/MantiHtml/PostTemplate.php";
}
file.close();