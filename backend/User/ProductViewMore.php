<?php
include("../Connection.php");


    $i = 0;
    $j = 0;
    $list = array();
    $selQry="SELECT * FROM tbl_product p  where p.product_id='".$_GET["id"]."'"; 
    $row = $con->query($selQry);
    while($data = $row->fetch_assoc())
    {
        $i++;
        $list[] =  $data;
        $list[$j]['id'] = $i;
        
        $selGallery="SELECT * FROM tbl_gallery g where g.product_id='".$data["product_id"]."'"; 
        $rowG = $con->query($selGallery);
        $gallery = array();
        while($dataG = $rowG->fetch_assoc())
        {
            $gallery[] =  $dataG;
        }

        $list[$j]['gallery'] = $gallery;

        $selReview="SELECT * FROM tbl_review r inner join tbl_user u on u.user_id=r.user_id where r.product_id='".$data["product_id"]."'"; 
        $rowR = $con->query($selReview);
        $review = array();
        while($dataR = $rowR->fetch_assoc())
        {
            $review[] =  $dataR;
        }
        $list[$j]['review'] = $review;

        $j++;
    }
    
    echo json_encode($list);
    
?>