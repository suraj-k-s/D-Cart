<?php

include("../Connection.php");

   
        $content = $_GET["content"];
        $id = $_GET["id"];


        $insQry = "insert into tbl_complaint(complaint_details,company_id,complaint_date)values('".$content."','".$id."',curdate())";
        if($con->query($insQry))
        {
            echo "true";
        }
        else{
            echo "false";
        } 
    

    
    ?>