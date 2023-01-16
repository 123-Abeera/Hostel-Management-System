<html>
 <head>
    <title> Welcome</title>
    <style>
    body {
        background: orange;
    }
    table{
         background-color: white;
    }

.block {
  display: block;
  width: 100%;
  border: none;
  background-color: #04AA6D;
  padding: 14px 28px;
  font-size: 16px;
  cursor: pointer;
  text-align: center;
}
    
</style>

</head>

<?php 

session_start();

if (!isset($_SESSION['username'])) {
    header("Location: index.php");
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome</title>

    <link rel="stylesheet" type="text/css" href="style.css">


</head>

<body>

           <?php echo '<ul>';
            echo' ';
            ?>

    <?php echo "<h1>Welcome " . $_SESSION['username'] . "</h1>";?>


           <?php echo '<ul>';
            echo' ';
            ?>
     
      <?php  echo '<ul>';
      echo '<li><button name="Logout" class="block"><a href="logout.php">Logout</a></button></li>';
      echo '<li><button name="Home Page" class="block"><a href="index.html">Home Page</a></button></li>';
    echo'</ul>';?>
    



    <!--<a href="hotel book.html">Hostel Registration </a><br/>-->
    
  
</body>
</html>