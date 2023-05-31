<?php 
 include("../Connection.php");
 if ($_SERVER["REQUEST_METHOD"]=="POST")
 { 
    $bookingdate = $_POST["booking_date"];
    $bookingamount=$_POST["booking_amount"];
    $userid=$_POST["user_id"];
    $insQry = "insert into tbl_booking(booking_date,booking_amount,user_id) 
    values('$bookingdate','$bookingamount','$userid')";
    if($con->query($insQry)){
        echo "Inserted";
    }
    
    else{
        echo "Not Inserted";
    }
 }
 if ($_SERVER["REQUEST_METHOD"]=="GET")
 { 
 $selQry="select * from tbl_booking b inner join tbl_user u on b.user_id=u.user_id;"; 
 $row=$con->query($selQry);
 $arry=array();
 while($data=$row->fetch_assoc())
 {
    $arry=$data;

 }
 echo json_encode($arry);
}
?>