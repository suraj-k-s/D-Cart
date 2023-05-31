<?php

include("../Connection.php");

if($_SERVER["REQUEST_METHOD"]=="GET"){
    $i = 0;
    $j = 0;
    $list = array();
    $selQry = "SELECT * FROM tbl_company c inner join tbl_place p on p.place_id=c.place_id inner join tbl_district d on d.district_id=p.district_id inner join tbl_state s on s.state_id=d.state_id inner join tbl_country co on co.country_id=s.country_id where company_vstatus='1'";
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