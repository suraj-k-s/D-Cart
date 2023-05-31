<?php
include("../Connection.php");
if ( $_SERVER["REQUEST_METHOD"]=="POST" )
{ $request = file_get_contents("php://input");
    $data = json_decode($request);
    $country = $data->countryId;
    $state = $data->stateName;

    if($country!="" && $state!="")
    {
        $insQry = "insert into tbl_state(country_id,state_name)values('".$country."','".$state."')";

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
    $country = $_GET["id"];

    if($country!="")
    {
        $delQry = "delete from tbl_state where state_id ='".$country."'";
        if($con->query($delQry))
        {
            echo "Success";
        }
        else{
            echo "Failed";
        }
    }
 }
 else if($_SERVER["REQUEST_METHOD"]=="GET"){
$i = 0;
$j = 0;
$list = array();
$selQry = "select * from tbl_state p inner join tbl_country c on p.country_id=c.country_id";
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
 