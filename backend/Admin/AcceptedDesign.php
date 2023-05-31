

 <?php
 include("../Connection.php");

        $i = 0;
    $j = 0;
    $list = array();
    $selQry = "select * from tbl_design d inner join tbl_designer dr on dr.designer_id=d.designer_id where design_status=1";
    $row = $con->query($selQry);
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