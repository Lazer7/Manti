<?php
    //Catches and blank forms and returns it as a message
    $error='';
    $type='Thread';
    $Post='';
    // Checks to see if submit button was clicked
    if(isset($_POST["submit"]))
    {
        //Checks to see if the Title form was left blank
        $Title=$_POST['Title'];
        if(empty($Title))
        {
            $error="<label class='text-danger'>TITLE LEFT BLANK</label>";
        }
        //Checks to see if Thread/Post Radio Buttons were left blank
        else if(empty($_POST["Thread"])){
            $error="<label class='text-danger'>Thread/Post LEFT BLANK</label>";
        }
        //Checks to see if Textarea was left blank
        else if(empty($_POST["textarea"])){
            $error="<label class='text-danger'>TEXT BOX LEFT BLANKS</label>";
        }
        //Else connect to the database and update it with new data
        else{
            //Get the category stored in the Json File
            $str=file_get_contents('../MantiHTML/Category.json');
            $json=json_decode($str,true);
            $category= $json;
            //Get the message the user put in the textbox area
            $Message = $_POST["textarea"];
            
            //CONNECT TO DATABASE (LOCALHOST)
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
            //Create SQL STATEMENTS TO RETREIVE THE THREAD/POST
            $URL=" ";
            $sql = "INSERT INTO ";
            $sql2="SELECT ";
            //CHECK TO SEE IF THREAD RADIO BUTTON WAS PUSHED
           if($_POST['Thread']=='Thread')
            {
               //Boolean used to provide the POST PAGE Information wether if to show thread or post
                $IsThread=true;
                $type='Threads';
               //SQL Statement to insert data into Thread Table
                $sql .=' Threads (`Thread_title`, `Thread_message`, `Thread_Date`, `Category_Name`) VALUE';
                $sql .=' (' .'"'. $Title.'"'.',' . '"'.$Message. '"'.','  .'"'. date("Y/m/d").'"' .','. '"'.$category .'"'. ');';    
               //SQL statement to get the thread ID 
                $sql2.=" Thread_ID AS ID from Threads where Thread_title=".'"'.$Title.'";';
               //Write blank to the comment file
                $fp = fopen('comment.json', 'w');
                fwrite($fp, '[]');
                fclose($fp);
            }
            //CHECK TO SEE IF POST RADIO BUTTON WAS PUSHED
            else if($_POST['Thread']=='Post')
            {
                //Boolean used to provide the POST PAGE Information wether if to show thread or post
                $IsThread=false;
                $type='posts';
                $URL=$_POST['URL'];
                //Checks to see if URL slot was left blank
                if(empty($Post)){
                    $error="<label class='text-danger'>URL LEFT BLANK</label>";
                }
                //SQL STATEMENT TO ADD ANOTHER POST TO THE DATABASE
                $sql .='`posts`(`Post_title`, `Post_date`, `Posts_message`, `Post_URL`, `Category_Name`) VALUE';
                $sql .=' (' .'"'. $Title.'"'.',' . '"'.date("Y/m/d"). '"'.','  .'"'.$Message .'"'.',' .'"'. $URL  .'"'.','. '"'.$category .'"'. ');';
                $sql2.=" Post_ID AS ID from posts where Post_title=".'"'.$Title.'";';
                $fp = fopen('comment.json', 'w');
                //Write blank to the comment file
                fwrite($fp, '[]');
                fclose($fp);
            }
            //CONNECT TO DATABASE AND INSERT
            $conn->query($sql);
            //GET RESULTS OF THE DATABASE FOR THE ID OF POST/THREAD
            $result = $conn->query($sql2);
            $TitleID=0;    
            if ($result->num_rows > 0) {
                while($row = $result->fetch_assoc()) {
                    $TitleID=$row["ID"];
                }
            }
            //TRIM MESSAGE
            $Title=trim($Title, "<p>");
            $Title=rtrim($Title, "</p>");
            $Message=trim($Message, "<p>");
            $Message=rtrim($Message, "</p>");
            //Make a object that holds these values
            $response['Title']=$Title;
            $response['Check']=$IsThread;
            $response['ID']=$TitleID;
            //CLOSE CONNECTION
            $conn->close();
            //OPEN AND WRITE THE MESSAGE

            $fp = fopen('Title.json', 'w');
            fwrite($fp, json_encode($response));
            fclose($fp);
      
             $Data['TITLE']=$Title;
             $Data['Category']=$category;
             $Data['Date']=date("Y/m/d");
             $Data['Message']=$Message;  
            $Data['URL']=$URL;
            $arr= array('TITLE'=>$Title,'Category'=>$category,'Date'=>date("Y/m/d"),'URL'=>$URL,'Message'=>$Message);
            //OPEN AND WRITE THE DATA 
            $fp = fopen('datas.json', 'w');
            fwrite($fp, '[');
            fwrite($fp, json_encode($Data));
            fwrite($fp, ']');
            fclose($fp);
            header("Location: PostTemplate.php");
            
            exit;
        }
            
    }
    
?>
<!DOCTYPE html>
<!--I am using something called Tinymce which is part of something called WYSIWIYG-->
<!--WYSIWIYG stands for what you see is what you get-->
<!--I can adjust the features for the textbox very easily, just tell me what you want-->
<html>
    <head>
        <!--BootStrap reference code-->
        <link rel="stylesheet" type="text/css" href="../MantiCSS/CommentPage.css">
        <!--JavaScript Source Code for the TextBox Function-->
       <script src="../MantiJS/plugin/tinymce/tinymce.min.js"></script>
        <!--"Initialize the Textbox editor in the designated area with CSS font"-->
        <script>
            tinymce.init({selector:'textarea',skin: 'BlueBasic'});
        </script>  

    </head>


    <div class="container-fluid">    
        <body>   
            <!--Form of the php to read-->
            <form name="form" Method="POST" action="messageboard.php">
               TITLE:<input type="text" name="Title">
                <table style="width:100%">
                    <!--radio box-->
                    <tr>
                        <th>Thread</th>
                        <th>Post</th>
                    </tr>
                    <tr>      
                        <th>   
                            <input type="radio" name="Thread" onclick="hideURL()" value="Thread"><br>  
                        </th>
                         <th>
                            <input type="radio" name="Thread" onclick="showURL()" value="Post"><br>
                        </th>      
                    </tr>
                </table>
                <!--URL from-->
                <div id="URL" style="display:none">URL:<input type="text" name="URL"></div>
                <!--Textbox area message-->
                <textarea name="textarea"></textarea>
                <!--submit button-->
                <input type="submit" name="submit" value="submit"><br/>
                <?php
                //error message
                        echo $error;
                    }   
                ?>
            </form>
            <!--To display the url or not based onclick-->
            <script type="text/javascript">
                function hideURL(){
                    document.getElementById('URL').style.display ="none";
                }
                function showURL(){
                    document.getElementById('URL').style.display ="block";
                }
                
            </script>

            
        </body>     
    </div>

</html>
