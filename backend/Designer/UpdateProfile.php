<?php

include("../Connection.php");

    if($_SERVER['REQUEST_METHOD']=="POST")
    {
        $designer = $_POST["name"];
        $designer_contact = $_POST["phone"];
        $designer_address = $_POST["address"];
        $designer_email = $_POST["email"];

        $insQry = "update tbl_designer set designer_name='".$designer."',designer_contact='".$designer_contact."',designer_address='".$designer_address."',designer_email='".$designer_email."' where designer_id='".$_POST["id"]."'";
        if($con->query($insQry))
        {
            echo "true";
        }
        else{
            echo "false";
        } 
    }

    ?>