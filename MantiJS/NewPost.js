var pictures=["../Mantipictures/mantiEmojis/manti_cool.png","../Mantipictures/mantiEmojis/manti_cry.png","../Mantipictures/mantiEmojis/manti_giggle.png","../Mantipictures/mantiEmojis/manti_love.png",
              "../Mantipictures/mantiEmojis/manti_reg.png","../Mantipictures/mantiEmojis/manti_sad.png","../Mantipictures/mantiEmojis/manti_smirk.png","../Mantipictures/mantiEmojis/manti_surprised.png"]
$.getJSON("../MantiHTML/datas.json", function(obj){
    
    $.each(obj, function(key,value){
     var titles=[{TITLE: value.TITLE, Category: value.Category,Message: value.Message, URL: value.URL, Date: value.Date}];
     $("#FillTitle").tmpl(titles).appendTo("#Titles");
    });
});

$.getJSON("../MantiHTML/comment.json", function(obj){
    $.each(obj, function(key,value){
        var Comments=[{Picture:pictures[Math.floor((Math.random() * 8))],ID:value.Comment_ID, WrittenEntry: value.Comment_message, Date: value.Comment_Date, Comment_Rating: value.Comment_Rating}];
        $("#FillEntry").tmpl(Comments).appendTo("#Comment");
    });
});
