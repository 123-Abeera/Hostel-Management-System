<html>
 <head>
    <title> LOGOUT</title>
    <style>
    body {
        background: orange;
    }
    table{
         background-color: white;
    }
    #home1{
    
    background-color: orange;
    color: white;
}
</style>
<div id="home1">
      <a class="active" href="index.html">Home</a>
    </div>
</head>
<?php 

session_start();
session_destroy();
 
header("Location: index.php");


?>
