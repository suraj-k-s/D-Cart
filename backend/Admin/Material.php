<?php 
 include("../Connection.php");
 if ($_SERVER["REQUEST_METHOD"]=="POST")
 { 
    $request = file_get_contents("php://input");
    $data = json_decode($request);
    $material = $data->material_name[0];

    if($material!="")
    {
        $insQry = "insert into tbl_material(material_name)values('".$material."')";

        if($con->query($insQry))
        {
            echo "Success";
        }
        else{
            echo "Failed";
        }
    }

}
 if($_SERVER["REQUEST_METHOD"]=="GET" && isset($_GET["id"]))
{
    $delQry = "delete from tbl_material where material_id ='".$_GET["id"]."'";
    if($con->query($delQry))
    {
        echo "Success";
    }
    else{
        echo "Failed";
    }
}
else if ($_SERVER["REQUEST_METHOD"]=="GET")
{ 
$i = 0;
$j = 0;
$list = array();
$selQry = "select * from tbl_material";
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

 

