<?php

include("../Connection.php");

    if($_SERVER['REQUEST_METHOD']=="POST")
    {
        $company = $_POST["name"];
        $Place = $_POST["place"];
        $company_contact = $_POST["phone"];
        $company_address = $_POST["address"];
        $company_email = $_POST["email"];
        $company_password = $_POST["password"];

        $logo = $_FILES["logo"]["name"];
        $temp = $_FILES["logo"]["tmp_name"];
        move_uploaded_file($temp,"../Assets/".$logo);
        
        $proof= $_FILES["proof"]["name"];
        $temp1 = $_FILES["proof"]["tmp_name"];
        move_uploaded_file($temp1,"../Assets/".$proof);

        echo $insQry = "insert into tbl_company(company_logo,company_proof,company_name,company_contact,company_address,place_id,company_email,company_password)values('".$logo."','".$proof."','".$company."','".$company_contact."','".$company_address."','".$Place."','".$company_email."','".$company_password."')";
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
        $selQry = "select * from tbl_company u inner join tbl_place p on p.place_id=u.place_id inner join tbl_district d on p.district_id=d.district_id";
        $result = $con->query($selQry);
        $rows = array();
        while($r = $result->fetch_assoc()) {
            $rows[] = $r;
            }
            print json_encode($rows);

    
    
        }
    ?>