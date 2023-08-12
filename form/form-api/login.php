<?php
    header("Content-type:application/json");
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Headers: *');

    $json = file_get_contents('php://input');
    $data = json_decode($json,true);

    $con = mysqli_connect("localhost","root","","contact");
    $result="";
        if(!empty($data['username']) and !empty($data['password'])) 
        {
            // Your code here
             $username = $data['username'];
            $password =$data['password'];
            
             $sql_select = "select * from register where username = '$username' and password = '$password' ";
             $data = mysqli_query($con,$sql_select);
           
         
             if(mysqli_num_rows($data) != 0 ) 
             {
               $result = "Loggedin Successfully!...";
            }
             else
             {
                $result = "Invalid Username and password";
              
             }
        }
        else{
          $result="";
        }
        
        $response[] = array("result" => $result);
        echo json_encode($response);
      
?>

<h1><?php echo $result; ?> hiii</h1>