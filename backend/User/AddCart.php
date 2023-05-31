<?php
include("../Connection.php");

$uid = $_GET["uid"];
$pid = $_GET["pid"];

$selqry="select * from tbl_booking where user_id='".$uid."' and booking_status='0'";

$result=$con->query($selqry);
if($result->num_rows>0)
{
	
	if($row=$result->fetch_assoc())
	{
		$bid = $row["booking_id"];
		
		
		
		$selqry="select * from tbl_cart where booking_id='".$bid."' and product_id='".$pid."'";
		//echo $selqry;
		$result=$con->query($selqry);
		if($result->num_rows>0)
		{
			 echo "Already Added to Cart";
			
		}
		else
		{
		
		 $insQry1="insert into tbl_cart(product_id,booking_id)values('".$pid."','".$bid."')";
         if($con->query($insQry1))
          { 
             echo "Added to Cart";
                        }
                        else
                        {
	                       echo"Failed";
                        }
		}
		
	}
	
}
else
{
	

$insQry=" insert into tbl_booking(user_id,booking_date)values('".$uid."',curdate())";
			if($con->query($insQry))
			{
				$selqry1="select MAX(booking_id) as id from tbl_booking";
                $result=$con->query($selqry1);
				if($row=$result->fetch_assoc())
				{
					$bid=$row["id"];
					
					
					$selqry="select * from tbl_cart where booking_id='".$bid."'and product_id='".$pid."'";
		$result=$con->query($selqry);
		if($result->num_rows>0)
		{
			 echo "Already Added to Cart";
			
		}
		else
		{
					
					
	                   $insQry1="insert into tbl_cart(product_id,booking_id)values('".$pid."','".$bid."')";
                        if($con->query($insQry1))
                        { 
                          echo "Added to Cart";
                        }
                        else
                        {
	                       echo"Failed";
                        }
					  
		}

                }
			}
}
?>