<?php
    header('Acces-Conrol-Allow-Origin: *');
    header('Acces-Control-Allow-Methods: POST, GET, DELETE, PUT, PATCH, OPTION');
    header('Acces-Control-Allow-Headers: token, Content-Type');
    header('Content-Lenght: 0');
    header('Content-Type: text/plain');
    $con = mysqli_connect("localhost","root", "", "formdata") or die ("could not connect DB");
?>
