<?php

//session_start();
/*
 * Control and process the contact page
 */
//if ($_POST['action'] == 'send') {
    //Collect the data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    //Validate the data
   
    //if no errors, process it
    $to = "nearents.matt@gmail.com";
    $from = "From: $email";
    $message .= "\n\n";
    $message .= "From,\n\n $name";
    $subject .= "message from portfolio";


    $success = mail($to, $subject, $message, $from);

    //inform the client
    if ($success) {
        $response = "message sent successfully";
    } else {
        $response = "Sorry but there was a problem, please try again later.";
    }

    echo $response;

//    include 'index.php'; //was contact.php 
//    exit;
//} else {
//    header('Location: index.php'); //was contact.php
//    exit;
//}
?>