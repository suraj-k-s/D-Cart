<?php

 include("../Connection.php");

    $uid = $_GET["uid"];
    $pid=$_GET["id"];
    $count=$_GET["count"];
    $feedback=$_GET["feedback"];


    $insQry = "insert into tbl_review(product_id,user_id,review_details,review_count) 
    values('$pid','$uid','$feedback','$count')";
    if($con->query($insQry)){
        echo "Inserted";
    }
    
    else{
        echo "Not Inserted";
    }
 

?>