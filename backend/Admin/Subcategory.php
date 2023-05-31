<?php 
 include("../Connection.php");
 
 if ($_SERVER["REQUEST_METHOD"]=="POST")
 { 
    $request = file_get_contents("php://input");
    $data = json_decode($request);
    $category = $data->categoryId[0];
    $subcategory = $data->subCategoryName[0];

    if($category!="" && $subcategory!="")
    {
        $insQry = "insert into tbl_subcategory(category_id,subcategory_name)values('".$category."','".$subcategory."')";

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
    $cat = $_GET["id"];

    if($cat!="")
    {
        $delQry = "delete from tbl_subcategory where subcategory_id ='".$cat."'";
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
$selQry = "select * from tbl_subcategory p inner join tbl_category c on p.category_id=c.category_id";
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
 
