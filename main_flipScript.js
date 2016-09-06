
//makes sure the strings are spelt correctly or you will stay up til 2:33 am debugging like Alex
var squareNames = ["square 1", "square 2", "square 3", "square 4", "square 5", "square 6", "square 7", "square 8", "square 9"];

var picNames = ["pic1", "pic2", "pic3", "pic4", "pic5", "pic6", "pic7", "pic8", "pic9" ];
//holds the path of all the sub pages
var subPagePool = ["subPages/MantiAnime.html", "subPages/MantiCoding.html", "subPages/MantiFood.html", "subPages/MantiGaming.html", "subPages/MantiMovie.html", "subPages/MantiNews.html", "subPages/MantiPhilosophical.html", "subPages/MantiScienceandTechnology.html", "subPages/MantiCodingHelp.html", "subPages/MantiHistory.html","subPages/MantiCars.html", "subPages/MantiArt.html", "subPages/MantiBooks.html","subPages/MantiFrugalLiving.html", "subPages/MantiPersonalFinance.html","subPages/MantiPhotography.html", "subPages/MantiAviation.html", "subPages/MantiGeology.html", "subPages/MantiDwarfFortress.html"];
//holds the path of all the pictures
var picturePool = ["pictures/anime.jpg", "pictures/Coding.jpg", "pictures/Food.jpg", "pictures/gaming.jpg", "pictures/Movie.jpg", "pictures/News.jpg", "pictures/Philosophical sculpture.jpg", "pictures/Science and Technology.jpg", "pictures/SOS.jpg", "pictures/History.png", "pictures/Cars.jpg", "pictures/Art.jpg", "pictures/Books.jpg", "pictures/Frugal_Living.jpg", "pictures/Personal_Finance.jpg", "pictures/Photography.jpg", "pictures/Aviation.jpg", "pictures/Geology.jpg", "pictures/Dwarf_Fortress.jpg"];

var displayStack = [];


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
                
             
           
        }



