<?php

include("../Connection.php");

    if($_SERVER['REQUEST_METHOD']=="POST")
    {
        $user = $_POST["name"];
        $Place = $_POST["place"];
        $user_contact = $_POST["phone"];
        $user_address = $_POST["address"];
        $user_email = $_POST["email"];
        $user_password = $_POST["password"];

        $photo = $_FILES["photo"]["name"];
        $temp = $_FILES["photo"]["tmp_name"];
        move_uploaded_file($temp,"../Assets/".$photo);

        $insQry = "insert into tbl_user(user_photo,user_name,user_contact,user_address,place_id,user_email,user_password)values('".$photo."','".$user."','".$user_contact."','".$user_address."','".$Place."','".$user_email."','".$user_password."')";
        if($con->query($insQry))
        {
            echo "true";
        }
        else{
            echo "false";
        } 
    }

    if($_SERVER['REQUEST_METHOD']=="GET")
    { 
        $selQry = "select * from tbl_user u inner join tbl_place p on p.place_id=u.place_id inner join tbl_district d on p.district_id=d.district_id";
        $result = $con->query($selQry);
        $rows = array();
        while($r = $result->fetch_assoc()) {
            $rows[] = $r;
            }
            print json_encode($rows);

    
    
        }
    ?>