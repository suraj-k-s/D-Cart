<?php
include("../Connection.php");

if($_SERVER["REQUEST_METHOD"]=="GET"){

    $i = 0;
    $j = 0;
    $list = array();
    $selQry="SELECT * FROM tbl_booking b inner join tbl_cart c on c.booking_id=b.booking_id inner join tbl_product p on p.product_id=c.product_id inner join tbl_user u on u.user_id=b.user_id  where cart_status!='0' and p.company_id='".$_GET["id"]."'"; 
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