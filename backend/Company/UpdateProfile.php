<?php

include("../Connection.php");

    if($_SERVER['REQUEST_METHOD']=="POST")
    {
        $company = $_POST["name"];
        $company_contact = $_POST["phone"];
        $company_address = $_POST["address"];
        $company_email = $_POST["email"];

        $insQry = "update tbl_company set company_name='".$company."',company_contact='".$company_contact."',company_address='".$company_address."',company_email='".$company_email."' where company_id='".$_POST["id"]."'";
        if($con->query($insQry))
        {
            echo "true";
        }
        else{
            echo "false";
        } 
    }

    ?>