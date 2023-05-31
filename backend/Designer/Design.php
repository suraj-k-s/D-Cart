<?php

include("../Connection.php");

    if($_SERVER['REQUEST_METHOD']=="POST")
    {
        $design = $_POST["name"];
        $designer = $_POST["id"];
        $subcategory = $_POST["subcategory"];
        $material = $_POST["material"];
        $rate = $_POST["rate"];
        $details = $_POST["details"];
        $converted = $_POST["converted"];

        $photo = $_FILES["photo"]["name"];
        $temp = $_FILES["photo"]["tmp_name"];
        move_uploaded_file($temp,"../Assets/".$photo);



            $selqey = "select * from tbl_design where design_converted='".$converted."'";
            $resul1t = $con->query($selqey);
            if($r1 = $resul1t->fetch_assoc()) {
                echo "Design Exist !!!";
            }
        
else{
    $insQry = "insert into tbl_design(design_photo,design_name,design_rate,design_details,subcategory_id,material_id,designer_id,design_converted)
    values('".$photo."','".$design."','".$rate."','".$details."','".$subcategory."','".$material."','".$designer."','".$converted."')";
    if($con->query($insQry))
    {
        echo "true";
    }
    else{
        echo "false";
    } 
}
      
    }

    if($_SERVER['REQUEST_METHOD']=="GET")
    { 
        $selQry = "select * from tbl_design u inner join tbl_subcategory p on p.subcategory_id=u.subcategory_id inner join tbl_category d on p.category_id=d.category_id";
        $result = $con->query($selQry);
        $rows = array();
        while($r = $result->fetch_assoc()) {
            $rows[] = $r;
            }
            print json_encode($rows);
    
        }
    ?>
