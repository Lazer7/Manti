<?php
    $error='';
    $type='Thread';
    $Post='';
    if(isset($_POST["submit"]))
    {
        $Title=$_POST['Title'];
        if(empty($Title))
        {
            $error="<label class='text-danger'>TITLE LEFT BLANK</label>";
        }
        else if(empty($_POST["Thread"])){
            $error="<label class='text-danger'>Thread/Post LEFT BLANK</label>";
        }
        else if(empty($_POST["textarea"])){
            $error="<label class='text-danger'>TEXT BOX LEFT BLANKS</label>";
        }
        else{
            $str=file_get_contents('../MantiHTML/Category.json');
            $json=json_decode($str,true);
            $category= $json;
            $Message = $_POST["textarea"];
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
            
            $sql = "INSERT INTO ";
            $sql2="SELECT ";
            $sql3="SELECT ";
           if($_POST['Thread']=='Thread')
            {
                $IsThread=true;
                $type='Threads';
                $sql .=' Threads (`Thread_title`, `Thread_message`, `Thread_Date`, `Category_Name`) VALUE';
                $sql .=' (' .'"'. $Title.'"'.',' . '"'.$Message. '"'.','  .'"'. date("Y/m/d").'"' .','. '"'.$category .'"'. ');';    
                $sql2='SELECT  `Thread_title`AS TITLE, `Category_Name`AS Category, `Thread_Date`AS Date,`Thread_message` AS Message,\' \' AS URL   FROM `threads` WHERE Thread_ID =';
                $sql3.=" Thread_ID AS ID from Threads where Thread_title=".'"'.$Title.'";';
            }
            else if($_POST['Thread']=='Post')
            {
                $IsThread=false;
                $type='posts';
                $Post=$_POST['URL'];
                if(empty($Post)){
                    $error="<label class='text-danger'>URL LEFT BLANK</label>";
                }
                $sql .='`posts`(`Post_title`, `Post_date`, `Posts_message`, `Post_URL`, `Category_Name`) VALUE';
                $sql .=' (' .'"'. $Title.'"'.',' . '"'.date("Y/m/d"). '"'.','  .'"'.$Message .'"'.',' .'"'. $Post  .'"'.','. '"'.$category .'"'. ');';
                $sql2.="Post_title AS TITLE,Category_Name AS Category,Post_date AS Date, Posts_message AS MESSAGE, Post_URL AS URL From Posts where Posts.Post_ID=";
                $sql3.=" Post_ID AS ID from posts where Post_title=".'"'.$Title.'";';
            //echo $sql;
            }
            
            if ($conn->query($sql) === TRUE) {
            } else {
                echo "Error: " . $sql . "<br>" . $conn->error;
            }
            echo $sql3;
            $result = $conn->query($sql3);
            $TitleID=0;    
            if ($result->num_rows > 0) {
                while($row = $result->fetch_assoc()) {
                    $TitleID=$row["ID"];
                }
            }
            $sql2.=$TitleID.';';
            $response['SQL']=$sql2;
            $response['Check']=$IsThread;
            $response['ID']=$TitleID;

            $conn->close();
            
            $fp = fopen('Queries.json', 'w');
            fwrite($fp, json_encode($response));
            fclose($fp);
            $fp = fopen('Title.json', 'w');
            fwrite($fp, json_encode($Title));
            fclose($fp);
            $fp = fopen('Type.json', 'w');
            fwrite($fp, json_encode($IsThread));
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
            <form name="form" Method="POST" action="messageboard.php">
               TITLE:<input type="text" name="Title">
                <table style="width:100%">
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
                <div id="URL" style="display:none">URL:<input type="text" name="URL"></div>
                <textarea name="textarea"></textarea>
                <input type="submit" name="submit" value="submit"><br/>
                <?php
                    if(isset($error))
                    {
                        echo $error;
                    }   
                ?>
            </form>
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
