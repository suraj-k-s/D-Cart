<?php

include("../Connection.php");

    if($_SERVER['REQUEST_METHOD']=="POST")
    {
        $product = $_POST["name"];
        $design = $_POST["did"];
        $company = $_POST["cid"];
        $rate = $_POST["rate"];
        $details = $_POST["details"];

        $photo = $_FILES["photo"]["name"];
        $photo = rand(10,100)."-".$photo;
        $temp = $_FILES["photo"]["tmp_name"];
        move_uploaded_file($temp,"../Assets/".$photo);
        

        $insQry = "insert into tbl_product(product_photo,product_name,product_rate,product_details,design_id,company_id)
        values('".$photo."','".$product."','".$rate."','".$details."','".$design."','".$company."')";
        if($con->query($insQry))
        {
            echo "true";
        }
        else{
            echo "false";
        } 
    }
    ?>
