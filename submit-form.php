<?php
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

$to = 'rohan.chetri1011@gmail.com';
$subject = 'New message from your portfolio website';
$body = "Name: $name\nEmail: $email\nMessage:\n$message";
$headers = "From: $email";

mail($to, $subject, $body, $headers);

echo 'Thank you for your message!';
?>
