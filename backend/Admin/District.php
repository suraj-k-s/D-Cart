<?php 
 include("../Connection.php");
 if ($_SERVER["REQUEST_METHOD"]=="POST")
 
    { $request = file_get_contents("php://input");
        $data = json_decode($request);
        $state = $data->stateId;
        $district = $data->districtName;
    
        if($state!="" && $district!="")
        {
            $insQry = "insert into tbl_district(state_id,district_name)values('".$state."','".$district."')";
    
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
         $state = $_GET["id"];
     
         if($state!="")
         {
             $delQry = "delete from tbl_district where state_id ='".$state."'";
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
     $selQry = "select * from tbl_district p inner join tbl_state c on p.state_id=c.state_id";
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