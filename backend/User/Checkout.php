<?php
       
    include("../Connection.php");

    $uid = $_GET["uid"];
    $amt = $_GET["amt"];
                
                
                $selC = "select * from tbl_booking where user_id='" .$uid. "'and booking_status='0'";
                $rs = $con->query($selC);
                $row=$rs->fetch_assoc();

                $bid = $row["booking_id"];
                 
                
                $upQry1 = "update tbl_booking set booking_date=curdate(),booking_amount='".$amt."',booking_status='1' where user_id='" .$uid. "'";
				$con->query($upQry1);
				
				 $upQry1 = "update tbl_cart set cart_status='1' where booking_id='" .$row["booking_id"]. "'";
                if($con->query($upQry1))
                {   
                    echo $bid;
                }

                ?>