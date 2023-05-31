<?php

include("../Connection.php");

    if($_SERVER['REQUEST_METHOD']=="POST")
    {
        $designer = $_POST["name"];
        $Place = $_POST["place"];
        $designer_contact = $_POST["phone"];
        $designer_address = $_POST["address"];
        $designer_email = $_POST["email"];
        $designer_password = $_POST["password"];

        $photo = $_FILES["photo"]["name"];
        $temp = $_FILES["photo"]["tmp_name"];
        move_uploaded_file($temp,"../Assets/".$photo);
        
        $proof= $_FILES["proof"]["name"];
        $temp1 = $_FILES["proof"]["tmp_name"];
        move_uploaded_file($temp1,"../Assets/".$proof);

        $insQry = "insert into tbl_designer(designer_photo,designer_proof,designer_name,designer_contact,designer_address,place_id,designer_email,designer_password)values('".$photo."','".$proof."','".$designer."','".$designer_contact."','".$designer_address."','".$Place."','".$designer_email."','".$designer_password."')";
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
        $selQry = "select * from tbl_designer u inner join tbl_place p on p.place_id=u.place_id inner join tbl_district d on p.district_id=d.district_id";
        $result = $con->query($selQry);
        $rows = array();
        while($r = $result->fetch_assoc()) {
            $rows[] = $r;
            }
            print json_encode($rows);

    
    
        }
    ?>
