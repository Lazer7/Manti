$.getJSON("datas.json", function(obj){
    
    $.each(obj, function(key,value){
     console.log("values "+value.Date);
     var titles=[{TITLE: value.TITLE, Category: value.Category,Message: value.Message, URL: value.URL, Date: value.Date}];
     $("#FillTitle").tmpl(titles).appendTo("#Titles");
    });
});

$.getJSON("comment.json", function(obj){
    $.each(obj, function(key,value){
        console.log("values "+value.TITLE);
        var Comments=[{WrittenEntry: value.Comment_message, Pictures: "../Mantipictures/emoji.png", Date: value.Comment_Date}];
        $("#FillEntry").tmpl(Comments).appendTo("#Comment");
    });
});