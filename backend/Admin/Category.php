<?php 
 include("../Connection.php");
 if ($_SERVER["REQUEST_METHOD"]=="POST")
 { 
    $request = file_get_contents("php://input");
    $data = json_decode($request);
    $category = $data->category_name[0];

    if($category!="")
    {
        $insQry = "insert into tbl_category(category_name)values('".$category."')";

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
    
    $delQry = "delete from tbl_category where category_id ='".$_GET["id"]."'";
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
    $selQry = "select * from tbl_category";
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
 


