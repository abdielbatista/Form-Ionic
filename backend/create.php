<?php
  include "config.php";
  $input = file_get_contents('php://input');
  $data = json_decode($input,true);
  $message = array();

  $name = $data['nome'];
  $cpf = $data['cpf'];
  $data_nasc = $data['data_nasc'];
  $tele = $data['tele'];

  $q = mysqli_query($con, "INSERT INTO `not` (`nome`, `cpf`, `data_nasc`, `nome_mae`, `tele`) VALUES ('$name','$cpf','$data_nasc','$tele')");

  if($q){
    http_response_code(201);
    $message['status'] =  'Success';
  }else{
    http_response_code(422);
    $message['status'] =  'Error';
  }

  echo json_encode($message);
  echo mysqli_errno($con);

?>
