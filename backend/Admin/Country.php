<?php
include("../Connection.php");
if ( $_SERVER[ "REQUEST_METHOD"]=="POST")
{
    $request = file_get_contents("php://input");
    $data = json_decode($request);
    $country = $data->country_name[0];

    if($country!="")
    {
        $insQry = "insert into tbl_country(country_name)values('".$country."')";

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
    
    $delQry = "delete from tbl_country where country_id ='".$_GET["id"]."'";
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
    $selQry = "select * from tbl_country";
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