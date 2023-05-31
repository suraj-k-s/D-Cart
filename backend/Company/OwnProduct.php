<?php 
 include("../Connection.php");

    $i = 0;
     $j = 0;
     $list = array();
     $selQry = "select * from tbl_product p inner join  tbl_design u on u.design_id=p.design_id  inner join tbl_designer dr on dr.designer_id=u.designer_id inner join tbl_subcategory sb on sb.subcategory_id=u.subcategory_id inner join tbl_category c on c.category_id=sb.category_id inner join tbl_material m on m.material_id=u.material_id where p.company_id='".$_GET["id"]."'";
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