<?php
    $user = $_REQUEST["email"];
    $pass = $_REQUEST["password"];
    
    $result = ($user == "admin" && $pass == "12345") ? "Success" : "Fail";
    echo $result;