<?php
       
    include("../Connection.php");

    $id = $_GET["id"];

	$upQry1 = "update tbl_cart set cart_status='2' where booking_id='" .$id. "'";
    if($con->query($upQry1))
    {   
        echo true;
    }
    else{
        echo false;
    }

    ?>