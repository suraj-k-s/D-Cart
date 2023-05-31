<?php 
 include("../Connection.php");

    $i = 0;
     $j = 0;
     $list = array();
      $selQry = "select * from tbl_design u inner join tbl_designer dr on dr.designer_id=u.designer_id inner join tbl_subcategory sb on sb.subcategory_id=u.subcategory_id inner join tbl_category c on c.category_id=sb.category_id inner join tbl_material m on m.material_id=u.material_id where dr.designer_id='".$_GET["id"]."' and design_status='1'";
      if(isset($_GET["sub"]))
      {
            $selQry=$selQry." and u.subcategory_id=".$_GET["sub"];
      }
    //   echo $selQry;
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