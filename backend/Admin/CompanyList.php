<?php
include("../Connection.php");
if ($_SERVER["REQUEST_METHOD"]=="GET")
 { 

        $i = 0;
    $j = 0;
    $list = array();
    $selQry = "select * from tbl_company where company_vstatus=0";
    $row = $con->query($selQry);
    while($data = $row->fetch_assoc())
    {
        $i++;
        $list[] =  $data;
        $list[$j]['id'] = $i;
        $j++;
    }
    
    echo json_encode($list);
}
if ($_SERVER["REQUEST_METHOD"]=="POST")
 { 
    $id = $_GET["id"];
    $status=$_GET["status"];

    $upQry = "update tbl_company set company_vstatus='$status' where company_id='$id'";
    
    if($con->query($upQry)){
        echo "Updated";
    }
    
    else{
        echo "Not Updated";
    }
 }
 
?>
