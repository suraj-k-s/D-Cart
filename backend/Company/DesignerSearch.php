<?php 
 include("../Connection.php");

    $i = 0;
     $j = 0;
     $list = array();
     $selQry = "select * from tbl_designer d inner join tbl_place p on p.place_id=d.place_id inner join tbl_district di on di.district_id=p.district_id inner join tbl_state s on s.state_id=di.state_id inner join tbl_country c on c.country_id=s.country_id where designer_vstatus=1";
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