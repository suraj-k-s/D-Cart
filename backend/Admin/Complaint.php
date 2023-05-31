<?php
include("../Connection.php");
if ($_SERVER["REQUEST_METHOD"]=="GET")
 { 

    $i = 0;
    $j = 0;
    $list = array();
    $selQry = "select * from tbl_complaint c inner join tbl_company co on co.company_id=c.company_id where c.complaint_status=0";
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
