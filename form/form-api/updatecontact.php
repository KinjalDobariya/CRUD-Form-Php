<?php
    header("Content-type:application/json");
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Headers: *');
    header('Access-Control-Allow-Methods: GET,PUT,POST,DELETE,PATCH,OPTIONS');
    
    $con = mysqli_connect("localhost","root","","contact");
  

    $id = $data['id'];
    echo $id;
    $sql_update = "select * from mycontact where id = '$id' ";
    $result = mysqli_query($con,$sql_update);

    $rows = array();
   
    while($r = mysqli_fetch_assoc($result)) {
       $rows = $r;
      

    }

    echo json_encode($rows);
?>
