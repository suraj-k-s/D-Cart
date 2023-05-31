<?php
include("../Connection.php");

if($_SERVER["REQUEST_METHOD"]=="GET"){

    $i = 0;
    $j = 0;
    $list = array();
     $sub=$_GET["sub"];
    $selQry="SELECT * FROM tbl_product p inner join tbl_design d on d.design_id=p.design_id inner join tbl_subcategory su on su.subcategory_id=d.subcategory_id inner join tbl_category ca on ca.category_id=su.category_id where su.subcategory_id='".$sub."';"; 
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
?>