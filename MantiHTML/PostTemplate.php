<?php
$error= '';
    if(isset($_POST["submit"]))
    {
        if(empty($_POST["textarea"])){
            $error="<label class='text-danger'>TEXT BOX LEFT BLANKS</label>";
        }
        else{
                $str=file_get_contents('../MantiHTML/Title.json');
                $json=json_decode($str,true);    
                $Titles=$json;
                $str=file_get_contents('../MantiHTML/Type.json');
                $json=json_decode($str,true);   
                $Message = $_POST["textarea"];
                $type=$json;
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
            
                if($type){
                    $sql="SELECT * FROM Threads where Thread_title =".'"'.$Titles.'";';
                    $result = $conn->query($sql);
                    if ($result->num_rows > 0) {
                        while($row = $result->fetch_assoc()) {
                            $Thread_ID=$row["Thread_ID"];
                        }
                    }
                    $sql="INSERT INTO `postcomment`(`Comment_message`, `Comment_Date`, `Thread_ID`) VALUES('".$Message."','".date("Y/m/d") ."','".$Thread_ID."');";
                    if ($conn->query($sql) === TRUE) {
                    } else {
                        echo "Error: " . $sql . "<br>" . $conn->error;
                    }
                }
                if(!$type){
                    $sql="SELECT * FROM Posts where Post_title =".'"'.$Titles.'";';
                    $result = $conn->query($sql);
                    if ($result->num_rows > 0) {
                        while($row = $result->fetch_assoc()) {
                            $Post_ID=$row["Post_ID"];
                        }
                    }
                    $sql="INSERT INTO `postcomment`(`Comment_message`, `Comment_Date`, `Posts_ID`) VALUES('".$Message."','".date("Y/m/d") ."','".$Post_ID."');";
                    if ($conn->query($sql) === TRUE) {
                    } else {
                        echo "Error: " . $sql . "<br>" . $conn->error;
                    }
                    
                }
        }
        unset($Message);
    }
            
?>

<!DOCTYPE html>
    <html>
        <head>
            <link rel="stylesheet" type="text/css" href="../MantiCSS/PostPage.css">
            <title>ForumPage</title>
            
            <ul>
                <!--This is our Logo Picture to display and also used to refresh the page-->
                <li><a href="http://localhost:4000/Mainpage"><img src="../Mantipictures/Logo2.png" class="animes" width="50" height="40"></a></li>
                <!--Future Text Logo-->
                <logo>MANTI</logo>
                <!--Search Bar *We need PhP for page/thread lookups-->           
                <form>
                    <br><input type="text" name="Search" placeholder="Search" height:20px><br>
                </form>     
            </ul>
                 
            <!--This div gets loaded with the Title Data and the Category-->
            <div id="Titles"></div>
            
        </head>
        
        <body>
            <!--This contains all the comments-->
            <div id="pageContent">

                <!--This contains the individual comment-->
                <div id="Comment"></div>
            </div>
            
            <form name="form" Method="POST" action="PostTemplate.php">
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
                    <div id="picture"><img src=${Pictures} width="150px" height="150px"> </img></div>
                    ${WrittenEntry}
                    POSTED:${Date}
                </div>
            </script>
            
            <script type="text/javascript" src="../MantiJS/jquery-1.8.1.js"></script>
            <script type="text/javascript" src="../MantiJS/jquery-1.4.4.js"></script>
            <script type="text/javascript" src="../MantiJS/jquery.tmpl.js"></script>
            <script type="text/javascript" src="../MantiJS/NewPost.js"></script>
            <script src="../MantiJS/plugin/tinymce/tinymce.min.js"></script>
            <!--"Initialize the Textbox editor in the designated area with CSS font"-->
             <script>
                 tinymce.init({selector:'textarea',skin: 'BlueBasic'});
            </script>  
        
        
        </body>
            
    </html>

