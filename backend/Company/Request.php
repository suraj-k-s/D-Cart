<?php 
 include("../Connection.php");
 if ($_SERVER["REQUEST_METHOD"]=="POST")
 { 
    $requestdate = $_POST["request_date"];
    $designid=$_POST["design_id"];
    $companyid=$_POST["company_id"];
    $requesttransaction=$_POST["request_transaction"];
    $insQry = "insert into tbl_request(request_date,design_id,company_id,request_transaction) 
    values('$requestdate','$designid','$companyid','$requesttransaction')";
    if($con->query($insQry)){
        echo "Inserted";
    }
    
    else{
        echo "Not Inserted";
    }
 }
 if ($_SERVER["REQUEST_METHOD"]=="GET")
 { 
 $selQry="select * from tbl_request r inner join tbl_design d on r.design_id=d.design_id inner join tbl_company c on r.company_id=c.company_id;"; 
 $row=$con->query($selQry);
 $arry=array();
 while($data=$row->fetch_assoc())
 {
    $arry=$data;

 }
 echo json_encode($arry);
}
?>