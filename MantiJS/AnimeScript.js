var id = '';
var type = '';
//this script makes it so that when the user clicks on a post, they are taken to the relevant postPage

//each function below impliments the above for each post object on the page
//note: this script is the same for all other scripts that are named <subPageName>Script save that they target different pages.  i.e Ani
document.getElementById('post1').onclick = function(){   
    id = document.getElementById('title1').getAttribute('data');
    type = document.getElementById('date1').getAttribute('type');
    window.location = "http://localhost/Manti/MantiHtml/AnimePosts/Anime1.php";
    
}

document.getElementById('post2').onclick = function(){
    id = document.getElementById('title2').getAttribute('data');
    type = document.getElementById('date2').getAttribute('type');
     window.location = "http://localhost/Manti/MantiHtml/AnimePosts/Anime2.php";
}

document.getElementById('post3').onclick = function(){
    id = document.getElementById('title3').getAttribute('data');
    type = document.getElementById('date3').getAttribute('type');
     window.location = "http://localhost/Manti/MantiHtml/AnimePosts/Anime3.php";
}

document.getElementById('post4').onclick = function(){
    id = document.getElementById('title4').getAttribute('data');
    type = document.getElementById('date4').getAttribute('type');
     window.location = "http://localhost/Manti/MantiHtml/AnimePosts/Anime4.php";
}

document.getElementById('post5').onclick = function(){
    id = document.getElementById('title5').getAttribute('data');
    type = document.getElementById('date5').getAttribute('type');
     window.location = "http://localhost/Manti/MantiHtml/AnimePosts/Anime5.php";
}

document.getElementById('post6').onclick = function(){
    id = document.getElementById('title6').getAttribute('data');
    type = document.getElementById('date6').getAttribute('type');
     window.location = "http://localhost/Manti/MantiHtml/AnimePosts/Anime6.php";
}

document.getElementById('post7').onclick = function(){
    id = document.getElementById('title7').getAttribute('data');
    type = document.getElementById('date7').getAttribute('type');
     window.location = "http://localhost/Manti/MantiHtml/AnimePosts/Anime7.php";
}

document.getElementById('post8').onclick = function(){
    id = document.getElementById('title8').getAttribute('data');
    type = document.getElementById('date8').getAttribute('type');
     window.location = "http://localhost/Manti/MantiHtml/AnimePosts/Anime8.php";
}

document.getElementById('post9').onclick = function(){
    id = document.getElementById('title9').getAttribute('data');
    type = document.getElementById('date9').getAttribute('type');
     window.location = "http://localhost/Manti/MantiHtml/AnimePosts/Anime9.php";
}

document.getElementById('post10').onclick = function(){
    id = document.getElementById('title10').getAttribute('data');
    type = document.getElementById('date10').getAttribute('type');
     window.location = "http://localhost/Manti/MantiHtml/AnimePosts/Anime10.php";
}