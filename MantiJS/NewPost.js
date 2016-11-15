var post = document.getElementById('Post');
post.onclick=function(){
    window.alert("button was clicked");
    var PostPage= window.open("");
    PostPage.document.write("<!DOCTYPE html><html><head>hello</head></html>");
    
}