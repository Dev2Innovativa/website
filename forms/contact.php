<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require '../PHPMailer/Exception.php';
require '../PHPMailer/PHPMailer.php';
require '../PHPMailer/SMTP.php';

$mail = new PHPMailer(true);

try {

$mail->isSMTP();
$mail->Host = 'smtp.gmail.com';
$mail->SMTPAuth = true;

$mail->Username = 'otp.innovativa@gmail.com';
$mail->Password = 'Your_PASSWORD';

$mail->SMTPSecure = 'tls';
$mail->Port = 587;

$mail->setFrom($_POST['email'], $_POST['name']);
$mail->addAddress('otp.innovativa@gmail.com');

$mail->Subject = $_POST['subject'];

$mail->Body =
"Name: ".$_POST['name']."\n".
"Email: ".$_POST['email']."\n".
"Message: ".$_POST['message'];

$mail->send();

echo "OK";

} catch (Exception $e) {

echo "Mailer Error: {$mail->ErrorInfo}";

}
?>