<?php 
 include("../Connection.php");
 if ($_SERVER["REQUEST_METHOD"]=="POST")
 { 

    $reply = $_POST["reply"];
    $id = $_POST["id"];

    if($reply!="")
    {
        $insQry = "update tbl_complaint set complaint_reply='".$reply."',complaint_status=1 where complaint_id='".$id."'";
echo $insQry;
        if($con->query($insQry))
        {
            echo true;
        }
        else{
            echo "Failed";
        }
    }

}

 ?>