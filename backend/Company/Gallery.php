<?php 
 include("../Connection.php");
 if ($_SERVER["REQUEST_METHOD"]=="POST")
 { 
    $gallerycaption = $_POST["caption"];
    $productid=$_POST["did"];
    $galleryfile=$_FILES["photo"]["name"];
    $temp1 = $_FILES["photo"]["tmp_name"];

    move_uploaded_file($temp1,'../Assets/'.$galleryfile);
    $insQry = "insert into tbl_gallery(gallery_caption,product_id,gallery_file) 
    values('$gallerycaption','$productid','$galleryfile')";

    if($con->query($insQry)){
        echo "Inserted";
    }
    else{
        echo "Not Inserted";
    }
 }
 if ($_SERVER["REQUEST_METHOD"]=="GET")
 { 

 $i = 0;
    $j = 0;
    $list = array();
    $selQry = "select * from tbl_gallery g inner join tbl_product p on g.product_id=p.product_id where g.product_id='".$_GET["id"]."'";
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