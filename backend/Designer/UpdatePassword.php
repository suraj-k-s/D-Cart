<?php

include("../Connection.php");

    if($_SERVER['REQUEST_METHOD']=="POST")
    {
        $password = $_POST["password"];

        $insQry = "update tbl_designer set designer_password='".$password."' where designer_id='".$_POST["id"]."'";
        if($con->query($insQry))
        {
            echo "true";
        }
        else{
            echo "false";
        } 
    }

    ?>