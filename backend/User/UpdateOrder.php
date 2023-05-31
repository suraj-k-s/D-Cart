<?php
 include("../Connection.php");

    
        $id = $_GET["id"];
        $sts = $_GET["sts"];
        $upQry = "update tbl_cart set cart_status = '" .$sts. "' where cart_id='" .$id. "'";
        $con->query($upQry);

?>