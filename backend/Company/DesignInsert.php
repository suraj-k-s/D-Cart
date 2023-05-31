<?php

include("../Connection.php");

    if($_SERVER['REQUEST_METHOD']=="POST")
    {
        $id = $_POST["id"];
        $cid = $_POST["cid"];
       
        
        $insQry  = "update tbl_design set design_status=1,company_id='$cid' where design_id='$id'";

        if($con->query($insQry))
        {
            echo "true";
        }
        else{
            echo "false";
        } 
    }

   
    ?>
