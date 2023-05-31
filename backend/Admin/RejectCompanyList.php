<?php
include("../Connection.php");
if ($_SERVER["REQUEST_METHOD"]=="GET")
 { 

        $i = 0;
    $j = 0;
    $list = array();
    $selQry = "select * from tbl_company where company_vstatus=2";
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
