<?php
include("../Connection.php");
if ($_SERVER["REQUEST_METHOD"]=="GET")
 { 

        $i = 0;
    $j = 0;
    $list = array();
    $selQry = "select * from tbl_design d inner join tbl_designer dr on dr.designer_id=d.designer_id where design_status=0";
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

    $upQry = "update tbl_design set design_status='$status' where design_id='$id'";
    
    if($con->query($upQry)){
        echo "Updated";
    }
    
    else{
        echo "Not Updated";
    }
 }
 
?>
