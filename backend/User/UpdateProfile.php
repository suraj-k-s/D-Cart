<?php

include("../Connection.php");

    if($_SERVER['REQUEST_METHOD']=="POST")
    {
        $user = $_POST["name"];
        $user_contact = $_POST["phone"];
        $user_address = $_POST["address"];
        $user_email = $_POST["email"];

        $insQry = "update tbl_user set user_name='".$user."',user_contact='".$user_contact."',user_address='".$user_address."',user_email='".$user_email."' where user_id='".$_POST["id"]."'";
        if($con->query($insQry))
        {
            echo "true";
        }
        else{
            echo "false";
        } 
    }

    ?>