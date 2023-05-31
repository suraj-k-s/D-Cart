<?php 
 include("../Connection.php");


 $i = 0;
    $j = 0;
    $list = array();
    $selQry = "select * from tbl_cart c inner join tbl_product p on c.product_id=p.product_id inner join tbl_booking b on c.booking_id=b.booking_id where cart_status=0 and  user_id='".$_GET["uid"]."'";
    $row = $con->query($selQry);
    while($data = $row->fetch_assoc())
    {
        $i++;
        $list[] =  $data;
        $list[$j]['id'] = $i;
        $j++;
    }
    
    echo json_encode($list);

?>