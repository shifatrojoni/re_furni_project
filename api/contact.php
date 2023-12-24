<?php 
    
    require 'db_config.php';

    $abc = json_decode(file_get_contents("php://input"));

    if(isset($abc->data->fname) && !empty($abc->data->fname) && isset($abc->data->lname) && !empty($abc->data->lname) && isset($abc->data->email) && !empty($abc->data->email) && isset($abc->data->message) && !empty($abc->data->message)){
        $fname =  $abc->data->fname;
        $lname =  $abc->data->lname;
        $email =  $abc->data->email;
        $message =  $abc->data->message;

        $sql = "INSERT INTO `msg`(`id`, `f_name`, `l_name`, `email`, `message`, `status`) VALUES (NULL, '$fname', '$lname','$email','$message', 0)";
    $db->query($sql);

    if($db->affected_rows>0){
        echo json_encode(["msg"=>"Successfully Inserted"]) ;
    } else {
        echo json_encode(["msg"=>"Problem"]) ;
    }
    } else {
        echo json_encode(["msg"=>"Empty Not allowed"]) ;
    }


    // Full texts
	// id 	f_name Ascending 1 	l_name 	email 	message 	status 	



?>