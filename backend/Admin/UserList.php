<?php
include("../Connection.php");
if ($_SERVER["REQUEST_METHOD"]=="GET")
 { 
 $selQry="select * from tbl_user co inner join tbl_place p inner join tbl_district d on p.district_id=d.district_id inner join tbl_state s on d.state_id=s.state_id inner join tbl_country c on c.country_id=s.country_id";

 $row=$con->query($selQry);
 $arry=array();
 while($data=$row->fetch_assoc())
 {
    $arry=$data;

 }
 echo json_encode($arry);
}
?>