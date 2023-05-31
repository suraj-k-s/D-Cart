<?php

header("Access-Control-Allow-Origin:*");
header("Access-Control-Allow-Methods:GET,POST");
header("Access-Control-Allow-Headers:*");


$Host="localhost";
$Username="root";
$Password="";
$DB="db_dressdesign";

$con = mysqli_connect($Host,$Username,$Password,$DB);
if(!$con)
{
    echo "Not connected";
}
?>