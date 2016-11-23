var Comments = [
    {WrittenEntry: "How to save a Life", Pictures: "../Mantipictures/emoji.png", Date: "April 7, 1997"},
    {WrittenEntry: "How to save a Life2", Pictures: "../Mantipictures/emoji.png", Date: "December 18, 1995"},
    {WrittenEntry: "How to save a Life3", Pictures: "../Mantipictures/emoji.png", Date: "February 26, 1996"},
    {WrittenEntry: "How to save a Life4", Pictures: "../Mantipictures/emoji.png", Date: "February 26, 1996"}
];
var titles;

$.getJSON("data.json", function(obj){
    
    $.each(obj, function(key,value){
     console.log("values "+value.TITLE);
     titles=[{TITLE: value.TITLE, Category: value.Category, Date: value.Date}];
        
    console.log("title"+ titles[0].TITLE);
     $("#FillTitle").tmpl(titles).appendTo("#Titles");
    });
});


$("#FillEntry").tmpl(Comments).appendTo("#Comment");