<?php
include("../Connection.php");
if ( $_SERVER["REQUEST_METHOD"]=="POST" )
{
    { $request = file_get_contents("php://input");
        $data = json_decode($request);
        $district = $data->districtId;
        $place = $data->placeName;
    
        if($district!="" && $place!="")
        {
            $insQry = "insert into tbl_place(district_id,place_name)values('".$district."','".$place."')";
    
            if($con->query($insQry))
            {
                echo "Success";
            }
            else{
                echo "Failed";
            }
        }
     }
    }
     if($_SERVER["REQUEST_METHOD"]=="GET" && isset($_GET["id"]))
     {
         $district = $_GET["id"];
     
         if($district!="")
         {
             $delQry = "delete from tbl_place where state_id ='".$district."'";
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
     $selQry = "select * from tbl_place p inner join tbl_district c on p.district_id=c.district_id";
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