<?php 
 include("../Connection.php");
 if ($_SERVER["REQUEST_METHOD"]=="POST")
 { 
    $complainttitle = $_POST["complaint_title"];
    $complaintdetails=$_POST["complaint_details"];
    $complaintdate=$_POST["complaint_date"];
    $companyid=$_POST["company_id"];
    $userid=$_POST["user_id"];
    $insQry = "insert into tbl_complaint(complaint_title,complaint_details,complaint_date,company_id,user_id) 
    values('$complainttitle','$complaintdetails','$complaintdate','$companyid','$userid')";
    if($con->query($insQry)){
        echo "Inserted";
    }
    
    else{
        echo "Not Inserted";
    }
 }
 if ($_SERVER["REQUEST_METHOD"]=="GET")
 { 
 $selQry="select * from tbl_complaint c inner join tbl_company p on c.company_id=p.company_id inner join tbl_user u on c.user_id=u.user_id;"; 
 $row=$con->query($selQry);
 $arry=array();
 while($data=$row->fetch_assoc())
 {
    $arry=$data;

 }
 echo json_encode($arry);
}
?>
