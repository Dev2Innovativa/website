<?php
class PHP_Email_Form {

  public $to;
  public $from_name;
  public $from_email;
  public $subject;
  public $messages = array();

  function add_message($content, $label = '', $length = 0) {
    $this->messages[] = $label . ": " . $content;
  }

  function send() {

    $message = "";
    foreach ($this->messages as $msg) {
      $message .= $msg . "\n";
    }

    $headers = "From: ".$this->from_name." <".$this->from_email.">";

    if(mail($this->to, $this->subject, $message, $headers)) {
      return "OK";
    } else {
      return "Email sending failed!";
    }

  }

}
?>