var Comments = [
    {WrittenEntry: "How to save a Life", Pictures: "../Mantipictures/emoji.png", Date: "April 7, 1997"},
    {WrittenEntry: "How to save a Life2", Pictures: "../Mantipictures/emoji.png", Date: "December 18, 1995"},
    {WrittenEntry: "How to save a Life3", Pictures: "../Mantipictures/emoji.png", Date: "February 26, 1996"},
    {WrittenEntry: "How to save a Life4", Pictures: "../Mantipictures/emoji.png", Date: "February 26, 1996"}
];

var title = {TITLE: "HELLO WORLD", Category: "FUUUU", Date: "November 8, 2016"};
$("#FillTitle").tmpl(title).appendTo("#Titles");
$("#FillEntry").tmpl(Comments).appendTo("#Comment");
