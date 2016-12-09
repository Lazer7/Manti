<?php
    $error= '';
    $str=file_get_contents('NewsTitle4.json');
    $json=json_decode($str,true);    
    $Titles=$json['Title'];
    $ID=$json['ID'];
    $type=$json['Check'];
    $ratings=array("GoodCitation","ReliableSources","ConciseComment","GoodCounterLogic","Informative","LogicalFallacy","NoRating");
    $GETID=array();
    $numberOfComments=0;

    $fp = fopen('comments.json', 'w');
    fwrite($fp, '[]');
    fclose($fp);
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "manti";
    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);
    // Check connection
    if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
    }  

    if($type==1){
        $sql="SELECT * FROM postcomment inner join ratings on postcomment.CommentID = ratings.CommentID WHERE Thread_ID=".$ID;
        $result=$conn->query($sql);
        $Comments='[';
        if ($result->num_rows > 0) {  
            while($row = $result->fetch_assoc()) {
                $BestRating=0;
                $index=0;
                for($i=0; $i<7; $i++){
                    if($row[$ratings[$i]]>$BestRating ){
                        $BestRating=  $row[$ratings[$i]];
                        $index=$i;
                    }   
                    $numberOfComments++;
                } 
             $Comments.='{"Comment_ID":'.$row['CommentID'].','.'"Comment_message":'.'"'.$row['Comment_message'].'"'.','.'"Comment_Date":'.'"'.$row['Comment_Date'].'"'.','.'"Comment_Rating":"'.$ratings[$index].'"},';
            
            }
        }
        echo "1";
         $Comments=rtrim($Comments, ",");
         $fp = fopen('comments.json', 'w');
        fwrite($fp, $Comments);
        fwrite($fp, ']');
        fclose($fp);

        $sql="SELECT CommentID FROM postcomment Where Thread_ID=".$ID;
        $result=$conn->query($sql);
        $i=0;
        if ($result->num_rows > 0) {
            while($row = $result->fetch_assoc()) {
                $GETID[$i]=$row['CommentID'];
                $i++;
            }  
        }
    }

    if($type==0){
        $sql="SELECT * FROM postcomment inner join ratings on postcomment.CommentID= ratings.CommentID  WHERE Posts_ID=".$ID;
        $result=$conn->query($sql);
        $Comments='[';
        if ($result->num_rows > 0) {
            while($row = $result->fetch_assoc()) {
                $BestRating=0;
                $index=0;
                for($i=0; $i<7; $i++){
                    if($row[$ratings[$i]]>$BestRating ){
                        $BestRating=  $row[$ratings[$i]];
                        $index=$i;
                    }   
                    $numberOfComments++;
                } 
            echo "LOOP"; $Comments.='{"Comment_ID":'.$row['CommentID'].','.'"Comment_message":'.'"'.$row['Comment_message'].'"'.','.'"Comment_Date":'.'"'.$row['Comment_Date'].'"'.','.'"Comment_Rating":"'.$ratings[$index].'"},';
            
            }
        }
                echo "2";
        $Comments=rtrim($Comments, ",");
         $fp = fopen('comments.json', 'w');
        fwrite($fp, $Comments);
        fwrite($fp, ']');
        fclose($fp);
        $sql="SELECT CommentID FROM postcomment WHERE Posts_ID=".$ID;
        $result=$conn->query($sql);
        $i=0;
        if ($result->num_rows > 0) {
            while($row = $result->fetch_assoc()) {
                $GETID[$i]=$row['CommentID'];
                $i++;
            }  
        }
    }

    if(isset($_POST['submit2'])){
        if($numberOfComments==0){
            $error="<label class='text-danger'>NO COMMENTS</label>";
        }
        else{
        $selected= $_POST["RatingSS"];
        $StringSelected;
        for($i=0; $i<7; $i++){
            if($selected==$ratings[$i]){        
                $StringSelected=$ratings[$i];
            }
        }
        $IDSELECTED=$_POST["RatingSSS"];
        $sql='UPDATE ratings SET '.$StringSelected .'='.$StringSelected.'+ 2 WHERE CommentID ='.$IDSELECTED;
        $conn->query($sql);
                    
        unset($Message);
        unset($_POST);
        $conn->close();
        header("Location: News4.php");  
        }
                

    }

    if(isset($_POST["submit"]))
    {


        if(empty($_POST["textarea"])){
            
            $error="<label class='text-danger'>TEXT BOX LEFT BLANKS</label>";
        }
        else{
                $Message=$_POST["textarea"];
                $Message=trim($Message, "<p>");
                $Message=rtrim($Message, "</p>");
                if($type==1){
                    $sql="INSERT INTO `postcomment`(`Comment_message`, `Comment_Date`, `Thread_ID`) VALUES('".$Message."','".date("Y/m/d")."','".$ID."');";
                    $conn->query($sql);
                   
                    $sql="SELECT COMMENTID AS ID FROM postcomment where Thread_ID=".$ID ." and Comment_message=".'"'.$Message .'"'." order by CommentID asc";
                    $result = $conn->query($sql);
                    $CommentID=0;
                    if ($result->num_rows > 0) {
                        while($row = $result->fetch_assoc()) {
                            $CommentID=$row["ID"];
                        }
                    }
                    $sql="INSERT INTO ratings (`CommentID`, `GoodCitation`, `ReliableSources`, `ConciseComment`, `GoodCounterLogic`, `Informative`, `LogicalFallacy`, `NoRating`) values(".$CommentID.',0,0,0,0,0,0,1)';
                    $conn->query($sql);
                }
            

                if($type==0){
                    $sql="INSERT INTO `postcomment`(`Comment_message`, `Comment_Date`, `Posts_ID`) VALUES('".$Message."','".date("Y/m/d") ."','".$ID."');";
                    $conn->query($sql);            
                    
                    $sql="SELECT COMMENTID AS ID FROM postcomment where Posts_ID=".$ID ." and Comment_message=".'"'.$Message .'"'." order by CommentID asc";
                    $result = $conn->query($sql);
                    $CommentID=0;
                    if ($result->num_rows > 0) {
                        while($row = $result->fetch_assoc()) {
                            $CommentID=$row["ID"];
                        }
                    }
                    $sql="INSERT INTO ratings (`CommentID`, `GoodCitation`, `ReliableSources`, `ConciseComment`, `GoodCounterLogic`, `Informative`, `LogicalFallacy`, `NoRating`) values(".$CommentID.',0,0,0,0,0,0,1)';
                    $conn->query($sql);
                
                }
            

               unset($Message);
               unset($_POST);
               $conn->close();
               header("Location: News4.php");  

            
        }
        
    }


?>

<!DOCTYPE html>
    <html>
        <head>
            <link rel="stylesheet" type="text/css" href="../../MantiCSS/PostPage.css">
            <title>ForumPage</title>
            <link rel='icon', href='../../Mantipictures/Logo2.png'>
            <ul>
                <!--This is our Logo Picture to display and also used to refresh the page-->
                <li><a href="http://localhost:4000/Mainpage"><img src="../../Mantipictures/Logo2.png" class="animes" width="50" height="40"></a></li>
                <!--Future Text Logo-->
                <logo>MANTI</logo>
                <!--Search Bar *We need PhP for page/thread lookups-->    
                <form name="cse" id="searchbox_demo" action="https://www.google.com/cse">
                    <input type="hidden" name="cref" value="" />
                      <input type="hidden" name="ie" value="utf-8" />
                      <input type="hidden" name="hl" value="" />
                      <input name="q" type="text" size="=20" />
                      <input type="submit" name="sa" value="Search" />
                    </form>
                <script type="text/javascript" src="https%3A%2F%2Fcse.google.com%2Fcse/tools/onthefly?form=searchbox_demo&lang="></script>
                
            </ul>
                 
            <!--This div gets loaded with the Title Data and the Category-->
            <div id="Titles"></div>
            
        </head>
        
        <body>
            <!--This contains all the comments-->
            <form name="form" Method="POST" action="News4.php" style="width: 100%">
            <div id="pageContent">

                <!--This contains the individual comment-->
                <div id="Comment"></div>
            </div>
            
                 <select name="RatingSS">
                     <option value="GoodCitation">      Good Citation      </option>
                     <option value="ReliableSources">   Reliable Sources   </option>
                     <option value="ConciseComment">    Concise Comment    </option>
                     <option value="GoodCounterLogic"> Good Counter Logic </option>
                     <option value="Informative">        Informative        </option>
                     <option value="LogicalFallacy">    Logical Fallacy    </option>
                 </select>  

                <select name="RatingSSS">
                    <?php for($x=0; $x<count($GETID); $x++){
                     echo '<option value='.$GETID[$x] .'>' .$GETID[$x] .'</option>';
                }?>

                   </select>  
        
                <input type="submit" name="submit2" value="submit Rating"><br/>
                <textarea name="textarea"></textarea>
                <input type="submit" name="submit" value="submit"><br/>
                <?php
                    if(isset($error))
                    {
                        echo $error;
                        
                    }   
                ?>
            </form>


            <!--Script to fill the title-->
            <script id="FillTitle" type="text/x-jQuery-tmpl">
                <h1>${TITLE}</h1>
                <h2>Category:${Category}</h2>
                <a href="${URL}">${URL}</a>
                <div>${Message}</div>
                POSTED:${Date}
            </script>
                        <!--Script to fill the Comment-->
            <script id="FillEntry" type="text/x-jQuery-tmpl">
                <div id="CommentBox">  
                <img src=${Picture} width="50px" height="50px"></img>
                    ${WrittenEntry}
                    <div>
                    ID: ${ID}
                    POSTED:${Date}
                    Rating: ${Comment_Rating}
                    </div>
                </div>
            </script>

        </body>

            <script type="text/javascript" src="../../MantiJS/jquery-1.8.1.js"></script>
            <script type="text/javascript" src="../../MantiJS/jquery-1.4.4.js"></script>
            <script type="text/javascript" src="../../MantiJS/jquery.tmpl.js"></script>
            <script src="../../MantiJS/jquery.dd.js" type="text/javascript"></script>
           
            <script src="../../MantiJS/plugin/tinymce/tinymce.min.js"></script>
            <!--"Initialize the Textbox editor in the designated area with CSS font"-->
             <script>
                 tinymce.init({selector:'textarea',skin: 'BlueBasic'});
            </script>  
            <script type="text/javascript">
            var pictures=["../../Mantipictures/mantiEmojis/manti_cool.png","../../Mantipictures/mantiEmojis/manti_cry.png","../../Mantipictures/mantiEmojis/manti_giggle.png","../../Mantipictures/mantiEmojis/manti_love.png",
              "../../Mantipictures/mantiEmojis/manti_reg.png","../../Mantipictures/mantiEmojis/manti_sad.png","../../Mantipictures/mantiEmojis/manti_smirk.png","../../Mantipictures/mantiEmojis/manti_surprised.png"];
            $.getJSON("../../MantiHTML/NewsPosts/NewsData4.json", function(obj){

                $.each(obj, function(key,value){
                 var titles=[{TITLE: value.TITLE, Category: value.Category,Message: value.Message, URL: value.URL, Date: value.Date}];
                 $("#FillTitle").tmpl(titles).appendTo("#Titles");
                });
            });

            $.getJSON("../../MantiHTML/NewsPosts/comments.json", function(obj){
                $.each(obj, function(key,value){
                    var Comments=[{Picture:pictures[Math.floor((Math.random() * 8))],ID:value.Comment_ID, WrittenEntry: value.Comment_message, Date: value.Comment_Date, Comment_Rating: value.Comment_Rating}];
                    $("#FillEntry").tmpl(Comments).appendTo("#Comment");
                });
            });
            </script>

                              
    </html>



















