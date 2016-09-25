
//makes sure the strings are spelt correctly or you will stay up til 2:33 am debugging like Alex
var squareNames = ["square 1", "square 2", "square 3", "square 4", "square 5", "square 6", "square 7", "square 8", "square 9"];

var picNames = ["pic1", "pic2", "pic3", "pic4", "pic5", "pic6", "pic7", "pic8", "pic9" ];
//holds the path of all the sub pages
var subPagePool = ["../MantiHTML/MantiAnime.html", "../MantiHTML/MantiCoding.html", "../MantiHTML/MantiFood.html", "../MantiHTML/MantiGaming.html", "../MantiHTML/MantiMovie.html", "../MantiHTML/MantiNews.html", "../MantiHTML/MantiPhilosophical.html", "../MantiHTML/MantiScienceandTechnology.html", "../MantiHTML/MantiCodingHelp.html", "../MantiHTML/MantiHistory.html","../MantiHTML/MantiCars.html", "../MantiHTML/MantiArt.html", "../MantiHTML/MantiBooks.html","../MantiHTML/MantiFrugalLiving.html", "../MantiHTML/MantiPersonalFinance.html","../MantiHTML/MantiPhotography.html", "../MantiHTML/MantiAviation.html", "../MantiHTML/MantiGeology.html", "../MantiHTML/MantiDwarfFortress.html"];
//holds the path of all the pictures
var picturePool = ["../Mantipictures/anime.jpg", "../Mantipictures/Coding.jpg", "../Mantipictures/Food.jpg", "../Mantipictures/gaming.jpg", "../Mantipictures/Movie.jpg", "../Mantipictures/News.jpg", "../Mantipictures/Philosophical sculpture.jpg", "../Mantipictures/Science and Technology.jpg", "../Mantipictures/SOS.jpg", "../Mantipictures/History.png", "../Mantipictures/Cars.jpg", "../Mantipictures/Art.jpg", "../Mantipictures/Books.jpg", "../Mantipictures/Frugal_Living.jpg", "../Mantipictures/Personal_Finance.jpg", "../Mantipictures/Photography.jpg", "../Mantipictures/Aviation.jpg", "../Mantipictures/Geology.jpg", "../Mantipictures/Dwarf_Fortress.jpg"];

var overlayTitles = ["Anime", "Coding","Food", "Gaming", "Movie", "News", "Philosophy", "Science and Technology", "Coding Help", "History", "Cars", "Art", "Books", "Frugal Living", "Personal Finance", "Photography", "Aviation", "Geology", "Dwarf Fortress"];

var displayStack = ["span one", "span two", "span three","span four", "span five", "span six", "span seven", "span eight", "span nine"];


var i;//declare counter outside the loop, of JSlint gets angry

    for (i = 0; i < 9; i++)
        {
            
           var toBePut = Math.floor(Math.random() * 19);//randomly chooses a space from the existing collection
            
            while(displayStack.indexOf(toBePut) != -1) //repeats are prevented here
                {
                   toBePut = Math.floor(Math.random() * 19); 
                }
                //once a space is chosen, the respective subPage and Pictures are displayed on the main Page
               displayStack.push(toBePut);
               document.getElementById(squareNames[i]).setAttribute("href", subPagePool[toBePut]); //here we switch the link source
               document.getElementById(picNames[i]).setAttribute("src", picturePool[toBePut]);      //here we switch the pictures source
               document.getElementById(displayStack[i]).innerHTML = overlayTitles[toBePut];
             
            
        }



