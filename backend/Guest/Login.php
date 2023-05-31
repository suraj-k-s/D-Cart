<?php
include("../Connection.php");


if($_SERVER['REQUEST_METHOD']=="POST")
    { 
        
        $Email=$_POST["email"];
        $Password=$_POST["password"];

        $request_body = file_get_contents('php://input');

        $data = json_decode($request_body);


        $selQryA = "select * from tbl_admin where admin_email='".$Email."' and admin_password='".$Password."'";
        $resultA = $con->query($selQryA);
        $rowsA = array();


        $selQryH = "select * from tbl_designer where designer_email='".$Email."' and designer_password='".$Password."' and  designer_vstatus=1";
        $resultH = $con->query($selQryH);
        $rowsH = array();

        $selQryC = "select * from tbl_company where company_email='".$Email."' and company_password='".$Password."' and company_vstatus=1";
        $resultC = $con->query($selQryC);
        $rowsC = array();


        $selQryU = "select * from tbl_user where user_email='".$Email."' and user_password='".$Password."'";
        $resultU = $con->query($selQryU);
        $rowsU = array();

        
        if($rA = $resultA->fetch_assoc()) 
        {
            $rowsA[] = $rA;
            $rowsA[1] = "Admin"; 
            print json_encode($rowsA); 
        }
        else if($rH = $resultH->fetch_assoc()) 
        {   
            $rowsH[] = $rH;
            $rowsH[1] = "Designer"; 
            print json_encode($rowsH); 
        }
        else if($rC = $resultC->fetch_assoc()) 
        {   
            $rowsC[] = $rC;
            $rowsC[1] = "Company"; 
            print json_encode($rowsC); 
        }
        else if($rU = $resultU->fetch_assoc()) 
        {
            $rowsU[] = $rU;
            $rowsU[1] = "User"; 
            print json_encode($rowsU); 
        }   
            
    
    }

        ?>