<?php 
 include("../Connection.php");
 if ($_SERVER["REQUEST_METHOD"]=="POST")
 { 
    $stockdate = $_POST["date"];
    $stockqty=$_POST["qty"];
    $productid=$_POST["product"];
    $insQry = "insert into tbl_stock(stock_date,stock_qty,product_id) 
    values('$stockdate','$stockqty','$productid')";
    if($con->query($insQry)){
        echo "Inserted";
    }
    
    else{
        echo "Not Inserted";
    }
 }
else if ($_SERVER["REQUEST_METHOD"]=="GET")
 { 
    $i = 0;
    $j = 0;
    $list = array();
    $selQry="select * from tbl_stock s inner join tbl_product p on s.product_id=p.product_id where p.product_id='".$_GET["id"]."'"; 
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